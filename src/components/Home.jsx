import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Home = () => {

  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Welcome to my profile", "My name is Mohan Jat", "I'm a full stack developer"],
      typeSpeed: 70,
      backSpeed: 30,
      loop: true,
      cursorChar: '',
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>

      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
        <h1 className='left_heading' ref={typedRef}></h1>

          <a href='https://drive.google.com/file/d/1JZFEi5F-WJmxkuqjaf21AGFRPT17y0yP/view?usp=drivesdk'
          target="_blank" className='btn default-btn'>Resume</a>
        </div>
        <div className="right">
           <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src="./im16.jpg" alt="Hero image" />
           </div>
        </div>
      </div>
    </>
  )
}

export default Home