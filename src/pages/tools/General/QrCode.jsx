import { useState } from "react";
import Alerts from "../../../components/Utility/Alerts";

const QrCode = () => {
  const [QrCodeUrl, SetQrCodeUrl] = useState("/images/qr/qr.png");
  const [InputFromUser, setInputFromUser] = useState("");
  const API = import.meta.env.VITE_MAKE_QRCODE_API;

  const startUrlMaker = () => {
    if (InputFromUser.length > 1) {
      const uri = `${API}${InputFromUser}`;
      SetQrCodeUrl(uri);
    }
  };

  return (
    <div
      data-aos="fade-up"
      className="h-screen pt-[4rem] flex flex-col items-center justify-center gap-6"
    >
      <div className="flex flex-col text-center">
        <h1 className="text-4xl font-bold ">QR CODE MAKER</h1>
        <p>Input your text/url and get your qr code</p>
      </div>

      <div className="h-72 w-80 rounded-md border flex justify-center items-center">
        <div>
          {" "}
          <img alt="" src={QrCodeUrl} />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <input
          type="text"
          onChange={(e) => setInputFromUser(e.target.value)}
          className="input input-bordered input-primary w-full max-w-xs"
          required
        />

        <Alerts
          buttonChildren="Create"
          buttonOnClick={() => startUrlMaker()}
          message="Qr code created"
          className="btn w-full"
        />

        <a href={`${QrCodeUrl}`} className="btn" download="qrcode">
          Download
        </a>
      </div>
    </div>
  );
};

export default QrCode;
