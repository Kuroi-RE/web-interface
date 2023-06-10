import { useState } from "react";
import Alerts from "../../../Utility/Alerts";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Tiktok() {
  const [Input, SetInput] = useState("");
  const [Data, setData] = useState([]);
  const [ResMsg, SetResMsg] = useState("Waiting data..");
  const [IsReady, SetIsReady] = useState(false);
  const [MsgBox, SetMsgBox] = useState(
    "Check the Status and Download your video"
  );

  const APIKEY = import.meta.env.VITE_RAPID_APIKEY;

  const Download = async () => {
    if (Input.length > 5) {
      const options = {
        method: "GET",
        url: "https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index",
        params: {
          url: Input,
        },
        headers: {
          "X-RapidAPI-Key": APIKEY,
          "X-RapidAPI-Host":
            "instagram-downloader-download-instagram-videos-stories.p.rapidapi.com",
        },
      };
      try {
        SetResMsg("Proccessing data...");
        const response = await axios.request(options);
        console.log(response.data);

        console.log(response.data);

        for (let index = 0; index < response.data.media.length; index++) {
          const element = response.data.media[index];
          setData(element);
        }

        SetResMsg("Video Ready");
        SetIsReady(true);
      } catch (error) {
        SetResMsg("Gagal Mendownload");
        console.error(error);
      }
    } else {
      SetMsgBox("Masukan data dengan benar");
    }
  };

  console.log(Data);

  return (
    <div
      data-aos="fade"
      className="flex min-h-screen flex-col items-center pt-[4rem] "
    >
      <div className="flex w-full flex-col items-center gap-10 bg-gradient-to-r from-[#C13584] to-[#833AB4] py-10">
        <div className="flex flex-col gap-4 text-center text-black">
          <h1 className="text-4xl font-bold ">
            Instagram Story, Reels Downloader
          </h1>
          <p>Input your link and Download that</p>
        </div>
        <div>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <div className="flex w-full items-center rounded-md  border bg-white px-3 py-4 text-black">
              <input
                type="url"
                id="input"
                onChange={(e) => SetInput(e.target.value)}
                required
                placeholder="Type here"
                className="w-80 border-none bg-transparent outline-none"
              />
            </div>
            <div className="flex flex-row gap-5">
              <Alerts
                onClick={() => Download()}
                buttonChildren="GET VIDEO"
                message={MsgBox}
              />
              <div>
                {IsReady ? (
                  <div>
                    <Link to={Data} className="btn-success btn" download>
                      Download
                    </Link>
                  </div>
                ) : (
                  <div>
                    <a href="" className="btn-disabled btn">
                      Download
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <h2 className="text-2xl">STATUS: </h2>
            <div className="mockup-code bg-blue-500">
              <pre data-prefix="~">
                <code>{ResMsg}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-10 px-5 py-10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
            <h1 className="text-2xl font-bold">How to Use</h1>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="font-semibold">Reels Download:</h2>
              <p>
                Click <mark className="bg-blue-300">Share icon </mark> and then
                Click &quot;Copy Url&quot;. Then paste your link into Input on
                the top.
              </p>
            </div>
            <div>
              <h2 className="font-semibold">Story Download:</h2>
              <p>Just input username and then click Download. Enjoy!</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
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
            <li> &gt; Download using your browser, no need a App</li>
            <li> &gt; Just download and Fun no need anything</li>
          </ul>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-10 px-5 py-10">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
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
            className="collapse-plus collapse border border-base-300 bg-base-200"
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
                  className="underline transition delay-100 hover:text-blue-600"
                >
                  Click Here
                </a>
              </p>
            </div>
          </div>
          <div
            tabIndex="0"
            className="collapse-plus collapse border border-base-300 bg-base-200"
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
