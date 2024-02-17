import React, { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import modelJson from './classifyfracture.json';

const FractureDetector = ({ onResultChange }) => {
  const [model, setModel] = useState(null);
  const [result, setResult] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      const modelWeightsPath = './classifyfracture_weight.h5';

      try {
        const weightsResponse = await fetch(modelWeightsPath);
        const weightsBuffer = await weightsResponse.arrayBuffer();

        const loadedModel = await tf.loadLayersModel(
          tf.io.fromMemory(modelJson, weightsBuffer),
        );

        setModel(loadedModel);
        console.log("Model Loaded Successfully:", loadedModel);
      } catch (error) {
        console.error('Error loading model:', error);
      }
    };

    loadModel();
  }, []);

  const predictImage = async (imageData) => {
    if (model) {
      const inputTensor = tf.browser.fromPixels(imageData)
        .resizeNearestNeighbor([128, 128])
        .toFloat()
        .div(tf.scalar(255))
        .expandDims();

      const predictions = model.predict(inputTensor);
      const resultArray = predictions.dataSync();
      setResult(resultArray[0]);
      onResultChange(resultArray[0]); // Pass the result to the parent component

      inputTensor.dispose();
      predictions.dispose();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = async (e) => {
      const image = new Image();
      image.onload = async () => {
        if (image.width > 0 && image.height > 0) {
          predictImage(image);
          setImageSrc(e.target.result);
        } else {
          console.error('Invalid image file');
        }
      };
      image.src = e.target.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {imageSrc && <img src={imageSrc} alt="Uploaded" style={{ maxWidth: '250px', maxHeight: '250px' }} />}
      {result !== null && (
        <p>
          Model Prediction: {result >0.501 ? 'Fractured Bone' : 'Not Fractured'}
        </p>
      )}
    </div>
  );
};

export default FractureDetector;
