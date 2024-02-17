import React from 'react';
import ques from '../components/pic/ques2.jpg'
import ques3 from '../components/pic/ques3.jpg'
import ques4 from '../components/pic/ques4.jpg'
import ques5 from '../components/pic/ques5.jpg'
export default function Page2() {
  const boxStyle = {
    border: '10px solid #ccc',
    padding: '10px',
    margin: '200px 0',
  };

  const paragraphStyle1 = {
    color: 'orange',
    textShadow: '2px 2px 25px rgba(0, 0, 255, 1)', 
  };

  const paragraphStyle2 = {
    color: 'white',
    textShadow: '2px 2px 25px rgba(128, 0, 128, 1)',
  };

  const paragraphStyle3 = {
    color: 'green',
    textShadow: '2px 2px 25px rgba(0, 128, 0, 1)', 
  };

  const paragraphStyle4 = {
    color: 'yellow',
    textShadow: '2px 2px 25px rgba(165, 42, 42, 1)', 
  };

  const paragraphStyle5 = {
    color: 'red',
    textShadow: '2px 2px 25px rgba(255, 0, 0, 1)', 
  };
  const paragraphStyle6 = {
    color: 'lightgreen',
    textShadow: '2px 2px 25px rgba(255, 0, 0, 1)', 
  };
  const imageStyle = {
    maxWidth: '100%',
    width: '200px',
    height: '200px',
    float: 'right',
    opacity: 0.9,
    animation: 'vibrateImage 2s infinite alternate',
  };
  return (
    <>
      <div style={boxStyle}>
        <h2 style={paragraphStyle6}>First Aid :</h2>
        <br />
        <h5 style={paragraphStyle1}>
        Ensure Safety:
          <br />
          <br />
          <h6>
          Make sure the scene is safe for both the injured person and yourself before approaching.
          <img id="fractureImage" src={ques} alt="Fractured Bone" style={imageStyle} />
        
          </h6>
        </h5>
        <br />
        <h5 style={paragraphStyle2}>
        Call for Emergency Assistance
          <br />
          <br />
          <h6>
          Dial emergency services (911 or the appropriate emergency number in your location) to request professional medical help.
           


          </h6>
        </h5>
        <br />
        <h5 style={paragraphStyle3}>
        Do Not Move the Injured Area:
          <br />
          <br />
          <h6>
          Encourage the person to remain as still as possible. Avoid unnecessary movement of the injured limb or area to prevent further damage.
          </h6>
        </h5>
        <br />
        <h5 style={paragraphStyle4}>
        Immobilize the Fractured Area:
          <br />
          <br />
          <h6>
          <img id="fractureImage" src={ques4} alt="Fractured Bone" style={imageStyle} />
          If possible, immobilize the injured limb or area using splints, towels, or clothing. This helps prevent additional injury and minimizes movement.
          </h6>
        </h5>
        <br />
        <h5 style={paragraphStyle5}>
        Provide Support:
          <br />
          <br />
          <h6>
          
          Offer support to the injured limb by placing cushions, pillows, or folded clothing around it. This can help reduce pain and prevent unnecessary movement.
          </h6>
        </h5>
        <br />
        <h5 style={paragraphStyle1}>
        Apply Ice Packs (Optional):
          <br />
          <br />
          <h6>
          If available, you can apply ice packs to the injured area wrapped in a thin cloth. This can help reduce swelling and alleviate pain.
          <img id="fractureImage" src={ques3} alt="Fractured Bone" style={imageStyle} />
          </h6>
        </h5>
        <br />
        <h5 style={paragraphStyle3}>
        Control Bleeding (if present):
          <br />
          <br />
          <h6>
          If there is an open wound associated with the fracture, apply gentle pressure with a clean cloth or sterile bandage to control bleeding.
          </h6>
        </h5>
        <br />
        <h5 style={paragraphStyle2}>
        Keep the Person Warm:
          <br />
          <br />
          <h6>
          Cover the person with a blanket or clothing to keep them warm. Shock can be a concern, and maintaining body temperature is important.
          <img id="fractureImage" src={ques5} alt="Fractured Bone" style={imageStyle} />
          </h6>
        </h5>
        <br />
        <h5 style={paragraphStyle5}>
        Reassure and Comfort:
          <br />
          <br />
          <h6>
          Stay with the injured person, offer reassurance, and keep them calm. Shock and stress can be significant, and emotional support is valuable.
          </h6>
        </h5>
        <br />
        <h5 style={paragraphStyle4}>
        Do Not Attempt to Set the Fracture:
          <br />
          <br />
          <h6>
         
          Leave the task of setting or manipulating the fractured bone to medical professionals. Improper handling can lead to further injury.
          
          </h6>
        </h5>
      </div>
      <style>
        {`
          @keyframes vibrateImage {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(5px); /* Adjust the vibration distance as needed */
            }
          }
        `}
      </style>
    </>
  );
}
