import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useParallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";
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
    <div className="flex flex-col">
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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary">
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
          <a href="#tool" className="btn btn-success px-10 lg:w-52">
            TOOLS
          </a>
        </div>
      </section>

      <section
        className="h-screen flex flex-col items-center gap-5 pt-24"
        id="tool"
      >
        <div>
          <h1 className="text-4xl font-bold"> TOOL INFORMATION</h1>
        </div>

        <div className="overflow-x-auto max-[1024px]:w-full">
          <table className="table w-44">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" disabled className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox"
                    />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">INSTAGRAM DOWNLOADER</div>
                      <div className="text-sm opacity-50">
                        Downloader Category
                      </div>
                    </div>
                  </div>
                </td>
                <td>Download Videos from instagram just with URL!</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>
                  <label>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox"
                    />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">TWITTER DOWNLOADER</div>
                      <div className="text-sm opacity-50">
                        Downloader Category
                      </div>
                    </div>
                  </div>
                </td>
                <td>Download Videos from Twitter just with URL!</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>
                  <label>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox"
                    />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">TIKTOK DOWNLOADER</div>
                      <div className="text-sm opacity-50">
                        Download Category
                      </div>
                    </div>
                  </div>
                </td>
                <td>Download Videos from Tiktok just with URL!</td>
              </tr>
              {/* row 4 */}
              <tr>
                <th>
                  <label>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox"
                    />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">FACEBOOK DOWNLOADER</div>
                      <div className="text-sm opacity-50">
                        Downloader Category
                      </div>
                    </div>
                  </div>
                </td>
                <td>Download Videos from Facebook just with URL!</td>
              </tr>
              {/* row 4 */}
              <tr>
                <th>
                  <label>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox"
                    />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">RANDOM QUOTES</div>
                      <div className="text-sm opacity-50">Anime Category</div>
                    </div>
                  </div>
                </td>
                <td>
                  Get a random quotes by Anime character just with clicked
                  button!
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <a href="#menu" className="btn btn-info">
            TRY THE TOOL
          </a>
        </div>
      </section>
      <section
        className="min-h-screen flex flex-col items-center gap-5 pt-24 pb-5 "
        id="menu"
      >
        <div className="flex flex-col md:gap-20">
          <div className="px-10 py-5 flex items-center flex-col md:flex-row md:gap-20 gap-5">
            {/* MENU 1 */}
            <div className="card w-72 bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Instagram Downloader</h2>
                <p>Download a videos from Story, Reel or Post</p>
                <div className="rating rating-md">
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-red-500"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-red-500"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-red-500"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-red-500"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-red-500"
                  />
                </div>
                <div className="card-actions justify-end">
                  <Link to="/instagram-downloader" className="btn">
                    USE NOW
                  </Link>
                </div>
              </div>
            </div>
            {/* MENU 1 */}
            {/* MENU 2 */}
            <div className="card w-72 bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Tiktok Downloader</h2>
                <p>Download a videos from Tiktok, Without Watermark</p>
                <div className="rating rating-md">
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-red-500"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-red-500"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-red-500"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-red-500"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-red-500"
                  />
                </div>
                <div className="card-actions justify-end">
                  <Link to="/tiktok-downloader" className="btn">
                    USE NOW
                  </Link>
                </div>
              </div>
            </div>
            {/* MENU 2 */}
          </div>
          <div className="px-10 flex flex-col md:flex-row md:gap-20 gap-5">
            {/* MENU 3 */}
            <div className="card w-72 bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Quotes</h2>
                <p>Get a random quotes by Anime character!</p>
                <div className="rating rating-md">
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-red-500"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-red-500"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-red-500"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-red-500"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-red-500"
                  />
                </div>
                <div className="card-actions justify-end">
                  <Link className="btn" to="/get-quotes">
                    USE NOW
                  </Link>
                </div>
              </div>
            </div>
            <div className="card w-72 bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Anime Wrapper</h2>
                <p>Get the details of the anime you want</p>
                <div className="rating rating-md">
                  <input
                    type="radio"
                    name="rating-9"
                    className="mask mask-star-2 bg-red-500"
                  />
                  <input
                    type="radio"
                    name="rating-9"
                    defaultChecked
                    className="mask mask-star-2 bg-red-500"
                  />
                  <input
                    type="radio"
                    name="rating-9"
                    className="mask mask-star-2 bg-red-500"
                  />
                  <input
                    type="radio"
                    name="rating-9"
                    className="mask mask-star-2 bg-red-500"
                  />
                  <input
                    type="radio"
                    name="rating-9"
                    className="mask mask-star-2 bg-red-500"
                  />
                </div>
                <div className="card-actions justify-end">
                  <Link
                    onClick={() =>
                      window.alert("This features not available now.")
                    }
                    className="btn"
                  >
                    USE NOW
                  </Link>
                </div>
              </div>
            </div>
            {/* MENU 3 */}
          </div>
        </div>
      </section>
    </div>
  );
}
