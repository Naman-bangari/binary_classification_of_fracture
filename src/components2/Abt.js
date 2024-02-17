import React from 'react'
import Slide from './Slide';
import Abt1 from './inner/Abt1';
import Page1 from '../components3/page1'
import Page2 from '../components3/page2'
export default function Abt(props) {
  const a=props.mode;
  const bgs = {
    background: 'black',
    height: '190vh',
    width: '100vw',
    position: 'relative',
    top: '300px', 
  };
  return (
    <>
    <div style={{background:a,height:'100vh',
    width:'100vw'}}>
      <Slide/>
      <Abt1/>
      <div style={{ margin: '350px 50px' ,fontFamily: 'Comic Sans MS' }}>
        <Page1 />
      </div>
      <div style={bgs}>
        <div style={{margin :'-500px 50px' ,fontFamily: 'Comic Sans MS' }}>
        <Page2 />
      </div></div>
      
      
    </div>
    <div>
    </div>
    </>
  )
}
