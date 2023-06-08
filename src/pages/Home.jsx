import { Player, Controls } from "@lottiefiles/react-lottie-player";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Cards from "../components/Home/Cards/Cards";
import Stats from "../components/Home/Stats/Stats";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <main className="flex flex-col font-primary overflow-hidden">
      <section
        id="start"
        data-aos="zoom-in-up"
        // ref={parallax.ref}
        className="h-screen flex flex-col gap-12 md:justify-center lg:justify-start lg:pt-32 lg:flex-row lg:gap-24"
      >
        <div className="flex flex-col pt-36 px-6 md:px-0 gap-6">
          <div className="md:pl-3">
            <h3 className="text-xs px-3 md:text-xl lg:text-2xl">
              # Free to use
            </h3>
            <h1 className="text-5xl font-secondary tracking-wider md:text-7xl lg:text-8xl font-bold text-primary">
              IN ONE TOOLS APPLICATION
            </h1>
            <p className="text-lg px-2 md:text-xl lg:text-2xl">
              You can use a tool very easy, free, safe. Try it now!
            </p>
          </div>
          <div className="flex gap-4 px-5">
            <Link to="/docs" className="btn btn-info">
              DEV
            </Link>
            <a href="#stats" className="btn btn-accent">
              GET STARTED
            </a>
          </div>
        </div>
        <div>
          <Player
            autoplay
            speed={1.5}
            loop
            src="https://assets10.lottiefiles.com/packages/lf20_RNUshsKFRE.json"
            // style={{ height: "300px", width: "300px" }}
            className="sm:h-80 sm:m-80 md:h-[450px] md:w-[450px] lg:h-[500px] lg:w-[500px] lg:pr-10"
          >
            <Controls visible={false} />
          </Player>
        </div>
      </section>
      <section
        id="stats"
        // ref={parallax2.ref}

        className="h-screen flex flex-col items-center gap-5 justify-center"
      >
        <div data-aos="zoom-in">
          <h1 className="text-4xl font-bold font-serif lg:text-5xl">WE HAVE</h1>
        </div>
        <div data-aos="zoom-in">
          <div className="stats w-80 text-center stats-vertical lg:stats-horizontal lg:w-[800px] shadow">
            <Stats />
          </div>
        </div>
        <div data-aos="fade" data-aos-offset="0">
          <a href="#menu" className="btn btn-success px-10 lg:w-52">
            TRY TOOL
          </a>
        </div>
      </section>

      <section className="min-h-screen" id="menu" data-aos="fade-up">
        <Cards />
      </section>
    </main>
  );
}
