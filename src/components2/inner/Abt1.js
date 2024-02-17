import React from 'react'
import './inn.css';
import search from '../../components/icon/search.png'
import time from '../../components/icon/time.png'
import plant from '../../components/icon/plant.png'
import thunder from '../../components/icon/thunder.png'
import winter from '../../components/icon/winter.png'
import snows from '../../components/icon/snows.png'
import greek from '../../components/icon/greek.png'
import eiffel from '../../components/icon/eiffel.png'
import clear from '../../components/icon/clear.png'
import happy from '../../components/icon/happy.png'
import globe from '../../components/icon/globe.png'
export default function Abt1() {
  const handlePictureClick = () => {
    
    const currentPosition = window.pageYOffset;
    const targetPosition = 650;
    window.scrollTo({
      top: currentPosition + targetPosition,
      behavior: 'smooth',
    });
  };
  return (
    <>
    <div className="one mx-5">
      Hey! looking for something interesting
      <img src={search}onClick={handlePictureClick} alt="pic" className="vibrating-image" />
    </div>
    <div className='zero' >
    <div className="two">
      <h1>Fun facts</h1>
    </div >
    <div className="mx-3 my-3"style={{ display: 'flex', justifyContent: 'space-between',flexWrap: 'wrap' }}>
      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text">
The word "fracture" has its origin in Latin. It comes from the Latin verb "frangere," which means "to break". So be aware not to get frangere .<img src={clear}className="vibrating-image" alt="pic"style={{ width: 80, height: 80 ,margin:'9px'}} /> </p>
        </div>
      </div>

      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text"> Approx 178 million new fractures globally in 2019, with the number of new fractures estimated to be 102 million in males compared with 76.4 million in females.<img src={globe} className="vibrating-image"alt="pic" /> </p>
        </div>
      </div>
      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text"> Wrist fractures are quite common, especially in older individuals.
Hip fractures are significant, particularly among the elderly, and they can have serious consequences.<img src={greek} className="vibrating-image"alt="pic" /> </p>
        </div>
      </div>
      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text">Children are prone to fractures due to their active lifestyles. Common fractures in children include those of the forearm and collarbone.<img src={plant} alt="pic" className="vibrating-image"/> </p>
        </div>
      </div>
      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text">Fractures can have a significant economic impact due to healthcare costs, rehabilitation, and potential loss of productivity.</p>
        </div>
      </div>
      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text">Women over the age of 65 and men over the age of 70 should consider regular bone density testing to assess the risk of osteoporosis. <img src={thunder} className="vibrating-image" alt="pic"style={{ width: 100, height: 100 }} /> </p>
        </div>
      </div>
      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text">If you're on medications that may affect bone density (such as corticosteroids), discuss with your healthcare provider about ways to mitigate potential risks. </p>
        </div>
      </div>
      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text">It is projected that more than about 50% of all osteoporotic hip fractures will occur in Asia by the year 2050 <img src={happy} alt="pic" className="vibrating-image"/></p>
        </div>
      </div>
      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text">In a 2005 study among Indian women aged 30-60 years from low income groups, BMD at all the skeletal sites were much lower than values reported from developed countries, with a high prevalence of osteopenia (52%) and osteoporosis (29%) thought to be due to inadequate nutrition</p>
        </div>
      </div>
      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text">Nearly all Asian countries fall far below the FAO/WHO recommendations for calcium intake of between 1000 and 1300 mg/day.<img src={snows} alt="pic" className="vibrating-image"/>  </p>
        </div>
      </div>
      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text">The human body has a remarkable ability to regenerate and heal. Fractures undergo a healing process where new bone tissue forms, leading to the restoration of bone integrity. </p>
        </div>
      </div>
      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text"> The rehabilitation process after a fracture can be demanding, requiring physical therapy and lifestyle adjustments to regain strength and functionality. <img src={winter} alt="pic" className="vibrating-image"/> </p>
        </div>
      </div>
      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text">Avoid smoking and limit alcohol consumption, as these habits can contribute to bone loss.<img src={eiffel} alt="pic" className="vibrating-image"style={{ width: 100, height: 100 ,margin:'20px'}}/>  </p>
        </div>
      </div>
      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text">Sports-related fractures, especially in high-impact or contact sports, contribute to surprising figures, emphasizing the need for protective measures and proper training. </p>
        </div>
      </div>
      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text">Experiencing a fracture may prompt individuals to become more aware of safety measures, leading to proactive steps to prevent future injuries and fractures.<img src={time} alt="pic" className="vibrating-image"/>  </p>
        </div>
      </div>
      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text"> Advances in orthopedic medicine and surgical techniques have improved the treatment of fractures, facilitating quicker and more effective recovery. </p>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
