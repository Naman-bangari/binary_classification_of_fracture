import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination,Autoplay } from 'swiper/modules';
import React from 'react'
import '../components2/styles.css';
import SwiperCore from 'swiper';
import img1 from '../components/pic/1.jpg'
import img2 from '../components/pic/2.jpg'
import img4 from '../components/pic/4.jpg'
import img3 from '../components/pic/3.jpg'
import img7 from '../components/pic/7.jpg'
import img8 from '../components/pic/8.jpg'
import img9 from '../components/pic/9.jpg'
import img10 from '../components/pic/10.jpg'
import Modal from 'react-modal';
import { useState } from 'react';
SwiperCore.use([Autoplay]);

export default function Slide() {
  const [isOpen, setIsOpen] = useState(0);
  const [text,settext]=useState('');
  const [wth,setwth]=useState('');
  const handleImageClick = (value) => {
    if(value===1)
    {
      settext('In an open fracture, the broken bone penetrates through the skin, or there is an open wound leading to the fracture. This type of fracture carries an increased risk of infection.')
      setwth('Open (Compound) Fracture')
    }
    else if(value===2)
    {
      settext(' A closed fracture occurs when the bone breaks, but there is no open wound or penetration of the skin. The fracture is contained within the body.');
      setwth('Closed (Simple) Fracture');
    }
    else if(value===3)
    {
      settext('A transverse fracture is characterized by a horizontal break across the bone. This type of fracture is often caused by a direct blow or trauma.');
      setwth('Transverse Fracture:');
    }
    else if(value===4)
    {
      setwth('Oblique Fracture:');
      settext('In an oblique fracture, the break is at an angle across the bone. This type of fracture is common in situations where force is applied at an angle.');
    }
    else if(value===5)
    {
      setwth('Comminuted Fracture:');
      settext('A comminuted fracture involves the bone breaking into three or more fragments. This type of fracture can result from high-impact trauma.');
    }
    else if(value===6)
    {
      setwth('Spiral Fracture:');
      settext('A spiral fracture occurs when a long bone is twisted, resulting in a spiral-shaped break. This type of fracture is common in sports injuries.');
    }
    else if(value===7)
    {
      setwth('Compression Fracture:');
      settext('Compression fractures involve the collapse of a vertebra, often seen in the spine. Osteoporosis is a common cause of compression fractures.');
    }
    else 
    {
      setwth('Impacted Fracture:');
      settext('In an impacted fracture, one end of the fractured bone is driven into the other. This can occur in vertical compression injuries.');
    }
    if(isOpen===value)
    {
      setIsOpen(0);
    }
    else{
      setIsOpen(value);
    }
  };

  const closeModal = () => {
    setIsOpen(0);
  };
  return (
    <div >
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          loop:true,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        autoplay={{ delay: 2000 }} 
        speed={3500}
      >
        
        <SwiperSlide>
          <img onClick={() => handleImageClick(1)}  src={img1}alt="error"style={{ width: 250, height: 200 }}/>
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={() => handleImageClick(2)} src={img2}alt="error"style={{ width: 250, height: 200 }}  />
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={() => handleImageClick(3)}src={img3} alt="error" style={{ width: 250, height: 200 }}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} onClick={() => handleImageClick(4)}alt="error"style={{ width: 250, height: 200 }} />
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={() => handleImageClick(5)}src={img9}alt="error" style={{ width: 250, height: 200 }}/>
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={() => handleImageClick(6)}src={img10} alt="error" style={{ width: 250, height: 200 }}/>
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={() => handleImageClick(7)}src={img7} alt="error" style={{ width: 250, height: 200 }}/>
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={() => handleImageClick(8)}src={img8} alt="error"style={{ width: 250, height: 200 }} />
        </SwiperSlide>
      </Swiper>
      <Modal ariaHideApp={false} style={{ content: {
            maxWidth: '600px',
            position:'relative',
            top:'60%',
            margin: 'auto',
            padding: '20px',
            backgroundColor: 'rgb(243 235 255)', 
            boxShadow:'0 1.5rem 3rem grey'
          }}}isOpen={!(isOpen===0)} onRequestClose={closeModal}>
        <h1>{wth}</h1>
        <button className="btn btn-primary"onClick={closeModal}>Close</button>
        <p>{text} </p>
      </Modal>
    </div>
    
  )
}
