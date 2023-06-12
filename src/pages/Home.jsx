import { Player, Controls } from "@lottiefiles/react-lottie-player";
import ScrollEffect from "../Utility/ScrollEffect";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Cards from "../components/Home/Cards/Cards";
import Stats from "../components/Home/Stats/Stats";

export default function Home() {

  ScrollEffect()

  return (
    <main className="flex flex-col overflow-hidden font-primary">
      <section
        id="start"
        data-aos="zoom-in-up"
        className="flex h-screen flex-col gap-12 md:justify-center lg:flex-row lg:justify-start lg:gap-24 lg:pt-32"
      >
        <div className="flex flex-col gap-6 px-6 pt-36 md:px-0">
          <div className="md:pl-3">
            <h3 className="px-3 text-xs md:text-xl lg:text-2xl">
              # Free to use
            </h3>
            <h1 className="font-secondary text-5xl font-bold tracking-wider text-primary md:text-7xl lg:text-8xl">
              IN ONE TOOLS APPLICATION
            </h1>
            <p className="px-2 text-lg md:text-xl lg:text-2xl">
              You can use a tool very easy, free, safe. Try it now!
            </p>
          </div>
          <div className="flex gap-4 md:pl-4">
            <Link to="/docs" className="btn-info btn">
              DEV
            </Link>
            <a href="#stats" className="btn-accent btn">
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
            className="sm:m-80 sm:h-80 md:h-[450px] md:w-[450px] lg:h-[500px] lg:w-[500px] lg:pr-10"
          >
            <Controls visible={false} />
          </Player>
        </div>
      </section>
      <section
        id="stats"
        className="flex h-screen flex-col items-center justify-center gap-5"
      >
        <div data-aos="zoom-in">
          <h1 className="font-serif text-4xl font-bold lg:text-5xl">WE HAVE</h1>
        </div>
        <div data-aos="zoom-in">
          <div className="stats stats-vertical w-80 text-center shadow lg:stats-horizontal lg:w-[800px]">
            <Stats />
          </div>
        </div>
        <div data-delay="0" data-aos-offset="0">
          <div>
            <a href="#menu" className="btn-success btn px-10 lg:w-52">
              TRY TOOL
            </a>
          </div>
        </div>
      </section>

      <section className="min-h-screen" id="menu" data-aos="fade-up">
        <Cards />
      </section>
    </main>
  );
}
