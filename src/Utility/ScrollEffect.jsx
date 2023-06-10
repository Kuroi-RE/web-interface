import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ScrollEffect = () => {
  const runAos = useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return runAos;
};

export default ScrollEffect;
