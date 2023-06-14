import Stat from "../Stats";

function Stats() {
  return (
    <section
      id="stats"
      className="flex h-screen flex-col items-center justify-center gap-5"
    >
      <div data-aos="zoom-in">
        <h1 className="font-serif text-4xl font-bold lg:text-5xl">WE HAVE</h1>
      </div>
      <div data-aos="zoom-in">
        <div className="stats stats-vertical w-80 text-center shadow lg:stats-horizontal lg:w-[800px]">
          <Stat />
        </div>
      </div>
      <div>
        <a href="#menu" className="btn-success btn px-10 lg:w-52">
          TRY TOOL
        </a>
      </div>
    </section>
  );
}

export default Stats;
