import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useParallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";
import Cards from "../components/Home/Cards/Cards";
export default function Home() {
  const parallax = useParallax({
    easing: "easeInQuad",
    translateX: [-30, 100],
  });
  const parallax2 = useParallax({
    easing: "easeIn",
    translateX: [-40, 100],
  });

  return (
    <main className="flex flex-col font-primary">
      <section
        id="start"
        ref={parallax.ref}
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
          <div className="flex gap-4">
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
        ref={parallax2.ref}
        id="stats"
        className="h-screen flex flex-col items-center gap-5 justify-center"
      >
        <div>
          <h1 className="text-4xl font-bold font-serif lg:text-5xl">WE HAVE</h1>
        </div>
        <div>
          <div className="stats w-80 text-center stats-vertical lg:stats-horizontal lg:w-[800px] shadow">
            <div className="stat ">
              <div className="stat-title">Tools Used</div>
              <div className="stat-value">1K</div>
              <div className="stat-desc">May 2023 - April 2023</div>
            </div>

            <div className="stat">
              <div className="stat-title">Tools Count</div>
              <div className="stat-value">4</div>
              <div className="stat-desc">+3 (May 2023)</div>
            </div>

            <div className="stat">
              <div className="stat-title">Tools Available</div>
              <div className="stat-value">2</div>
              <div className="stat-desc">60%</div>
            </div>
            <div className="stat">
              <div className="stat-title">Total Page Views</div>
              <div className="stat-value">10,400</div>
              <div className="stat-desc">15% more than last month</div>
            </div>
          </div>
        </div>
        <div>
          <a href="#menu" className="btn btn-success px-10 lg:w-52">
            TRY TOOL
          </a>
        </div>
      </section>

      <section className="min-h-screen " id="menu">
        <Cards />
      </section>
    </main>
  );
}
