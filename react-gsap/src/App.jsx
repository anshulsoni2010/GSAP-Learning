import { useEffect } from 'react';
import gsap from 'gsap';

const Loader = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5
    });

    tl.to('.loader-circle', {
      duration: 0.5,
      scale: 0.8
    })
      .to('.loader-circle', {
        duration: 0.5,
        scale: 1,
        ease: 'elastic.out(1, 0.3)'
      });

    return () => {
      tl.kill(); // Kill the animation when component unmounts
    };
  }, []);

  return (
    <div className="loader">
      <div className="loader-circle"></div>
    </div>
  );
};

export default Loader;
