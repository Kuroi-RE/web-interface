import { useState } from "react";
import Alerts from "../../../components/Utility/Alerts";

export default function Tiktok() {
  const [Input, SetInput] = useState("You're not input anything");

  return (
    <div
      data-aos="fade"
      className="h-screen pt-[4rem] flex flex-col items-center "
    >
      <div className="flex flex-col items-center gap-10 w-full py-10 bg-slate-400">
        <div className="flex flex-col text-center gap-4 text-black">
          <h1 className="text-4xl font-bold ">Tiktok Video Downloader</h1>
          <p>Input your link and Download that</p>
        </div>
        <div>
          <div className="flex flex-col items-center md:flex-row gap-4">
            <div className="rounded-md border w-full flex  items-center py-4 px-3 bg-white text-black">
              <input
                type="url"
                id="input"
                onChange={(e) => SetInput(e.target.value)}
                required
                placeholder="Type here"
                className="bg-transparent border-none w-80 outline-none"
              />
            </div>

            <div>
              <Alerts
                id="my-modal"
                buttonChildren="DOWNLOAD"
                className="btn"
                message={`This Features still Development. Your input: ${Input}`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start px-5 gap-10 w-full py-10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
            <h1 className="text-2xl font-bold">How to Use</h1>
          </div>
          <p>
            Click <mark className="bg-blue-300">Share icon </mark> and then
            Click &quot;Copy Url&quot;. Then paste your link into Input on the
            top.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
            <h1 className="text-2xl font-bold">Features</h1>
          </div>
          <ul>
            <li> &gt; No Watermark</li>
            <li> &gt; Download using your browser, no need a App</li>
            <li> &gt; Just download and Fun no need anything</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-start px-5 gap-10 w-full py-10">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
            <h1 className="text-2xl ">Frequently Asked</h1>
          </div>
          <div
            tabIndex="0"
            className="collapse collapse-plus border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
              This is Free?
            </div>
            <div className="collapse-content">
              <p>
                YES. you don&apos;t need to buy a premium or anything. This is
                totally free! but you can Support me with Donate!{" "}
                <a
                  href="http://saweria.com/"
                  className="underline hover:text-blue-600 delay-100 transition"
                >
                  Click Here
                </a>
              </p>
            </div>
          </div>
          <div
            tabIndex="0"
            className="collapse collapse-plus border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
              How to Download videos without Watermark?
            </div>
            <div className="collapse-content">
              <p>
                No watermark features is automatically enabled when you download
                a video.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
