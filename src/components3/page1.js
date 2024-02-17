import React from 'react';
import ques from '../components/pic/ques.jpg'
export default function Page1() {
  const boxStyle = {
    border: '10px solid #ccc',
    padding: '10px',
    margin: '200px 0',
  };

  const paragraphStyle1 = {
    color: 'blue',
    textShadow: '2px 2px 25px rgba(0, 0, 255, 1)', // Adjust the glow effect
  };

  const paragraphStyle2 = {
    color: 'purple',
    textShadow: '2px 2px 25px rgba(128, 0, 128, 1)', // Adjust the glow effect
  };

  const paragraphStyle3 = {
    color: 'green',
    textShadow: '2px 2px 25px rgba(0, 128, 0, 1)', // Adjust the glow effect
  };

  const paragraphStyle4 = {
    color: 'brown',
    textShadow: '2px 2px 25px rgba(165, 42, 42, 1)', // Adjust the glow effect
  };

  const paragraphStyle5 = {
    color: 'red',
    textShadow: '2px 2px 25px rgba(255, 0, 0, 1)', // Adjust the glow effect
  };

  return (
    <>
      <div style={boxStyle}>
        <h2>Precautions :</h2>
        <br />
        <h5 style={paragraphStyle1}>
          Maintain a Balanced Diet:
          <br />
          <br />
          <h6>
            Ensure your diet includes sufficient calcium and vitamin D, as these nutrients are crucial for bone health.
            Consume a variety of foods rich in minerals like calcium, phosphorus, and magnesium.
          </h6>
        </h5>
        <br />
        <h5 style={paragraphStyle2}>
          Regular Exercise:
          <br />
          <br />
          <h6>
            Engage in weight-bearing exercises like walking, jogging, or weightlifting to strengthen bones and improve
            overall bone density. Include activities that enhance balance and coordination, such as yoga and meditation.
            <img
        src={ques}
        alt="Fractured Bone"
        style={{
            animation: 'moveImage 3s infinite alternate',
            maxWidth: '100%',
            width: '200px',
            height: '200px',
            float: 'right',
            opacity: 0.6, 
            }}
        />


          </h6>
        </h5>
        <br />
        <h5 style={paragraphStyle3}>
          Fall Prevention:
          <br />
          <br />
          <h6>
            Remove tripping hazards at home, such as loose rugs, clutter, or electrical cords. Install handrails on
            staircases and in bathrooms to provide support. Use proper lighting in hallways, staircases, and rooms to
            reduce the risk of falls.
          </h6>
        </h5>
        <br />
        <h5 style={paragraphStyle4}>
          Regular Health Check-ups:
          <br />
          <br />
          <h6>
            Visit your healthcare provider regularly to assess your bone health and address any concerns. Monitor and
            manage conditions that can weaken bones, such as osteoporosis.
          </h6>
        </h5>
        <br />
        <h5 style={paragraphStyle5}>
          Limit Alcohol and Tobacco Use:
          <br />
          <br />
          <h6>
          Smoking can impair bone healing, so it's advisable to quit smoking during the recovery period.
Limit alcohol intake, as excessive alcohol consumption can interfere with the healing process.
          </h6>
        </h5>
        <br />
        <h5 style={paragraphStyle1}>
        Safety Measures at Home:
          <br />
          <br />
          <h6>
          Remove tripping hazards in your living environment to prevent accidental falls.
Install handrails in bathrooms and staircases for support.
          </h6>
        </h5>
        <br />
        <h5 style={paragraphStyle3}>
        Gradual Return to Activities:
          <br />
          <br />
          <h6>
          Gradually resume normal activities as advised by healthcare professionals.
Avoid putting excessive stress on the healing area until it has fully recovered.
          </h6>
        </h5>
        <br />
        <h5 style={paragraphStyle2}>
        Follow Healthcare Provider's Advice:
          <br />
          <br />
          <h6>
          Adhere to all recommendations and restrictions provided by your healthcare provider.
Report any unusual symptoms or signs of infection promptly.
          </h6>
        </h5>
      </div>
    </>
  );
}
