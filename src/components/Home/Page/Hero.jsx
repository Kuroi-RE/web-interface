import { Link } from "react-router-dom";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

function Hero() {
  return (
    <section
      id="start"
      data-aos="zoom-in-up"
      className="flex h-screen flex-col gap-12 md:justify-center lg:flex-row lg:justify-start lg:gap-24 lg:pt-32"
    >
      <div className="flex flex-col gap-6 px-6 pt-36 md:px-0">
        <div className="md:pl-3">
          <h3 className="px-3 text-xs md:text-xl lg:text-2xl"># Free to use</h3>
          <h1 className="font-secondary text-5xl font-bold tracking-wider text-primary md:text-7xl lg:text-8xl">
            IN ONE TOOLS APPLICATION
          </h1>
          <p className="px-2 text-lg md:text-xl lg:text-2xl">
            You can use a tool very easy, free, safe. Try it now!
          </p>
        </div>
        <div className="flex gap-4 md:pl-4">
          <a href="#stats" className="btn-accent btn">
            GET STARTED
          </a>
          <Link to="/developer" className="btn-info btn">
            DEVELOPER
          </Link>
        </div>
      </div>
      <div>
        <Player
          autoplay
          speed={1.5}
          loop
          src="https://assets10.lottiefiles.com/packages/lf20_RNUshsKFRE.json"
          className="sm:m-80 sm:h-80 md:h-[450px] md:w-[450px] lg:h-[500px] lg:w-[500px] lg:pr-10"
        >
          <Controls visible={false} />
        </Player>
      </div>
    </section>
  );
}

export default Hero;
