// import axios from "axios";
// import { useState, useEffect } from "react";

export default function Developer() {
  // const [Device, SetDevice] = useState();

  // useEffect(() => {
  //   const getDevice = navigator.userAgent;
  //   const getLocation = navigator.geolocation.getCurrentPosition(
  //     // Success function
  //     showPosition,
  //     // Error function
  //     null,
  //     // Options. See MDN for details.
  //     {
  //       enableHighAccuracy: true,
  //       timeout: 5000,
  //       maximumAge: 0,
  //     }
  //   );

  //   async function showPosition(position) {
  //     console.log(
  //       "Latitude: " +
  //         position.coords.latitude +
  //         "Longitude: " +
  //         position.coords.longitude
  //     );

  //     axios.post("https://ee47-103-247-13-133.ngrok-free.app/api", {
  //       user: {
  //         device: navigator.userAgent,
  //         location: {
  //           latitute: position.coords.latitude,
  //           longitude: position.coords.longitude,
  //         },
  //       },
  //     });
  //   }

  //   SetDevice(getDevice);
  //   console.log(getLocation);
  // }, []);

  return (
    <div className="flex flex-col gap-5 pt-24">
      <section className="flex h-screen flex-col gap-10">
        {/* <div>
          <h1>Your device:</h1>
          <h3 className="px-10 text-xl"> {Device}</h3>
        </div> */}
        <div className="flex flex-col gap-3 px-5">
          <h2 className="text-2xl"># Clone this Project</h2>
          <div className="mockup-code">
            <pre data-prefix="$">
              <code>
                git clone https://github.com/Kuroi-RE/web-interface.git
              </code>
            </pre>
            <pre data-prefix="$">
              <code>yarn add</code>
            </pre>
            <pre data-prefix=">" className="text-warning">
              <code>installing...</code>
            </pre>
            <pre data-prefix=">" className="text-success">
              <code>Done!</code>
            </pre>
          </div>
        </div>
        <div className="flex flex-col gap-4 px-5">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl"># Running project</h2>
            <div className="alert alert-info shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 flex-shrink-0 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>This project is Required API.</span>
              </div>
            </div>
          </div>
          <div className="mockup-code">
            <pre data-prefix="$">
              <code>yarn run dev</code>
            </pre>
            <pre data-prefix=">" className="text-success">
              <code>Done!</code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}
