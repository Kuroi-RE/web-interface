import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import Alerts from "../../../components/Utility/Alerts";

const ScanQr = () => {
  //   const [QrCodeUrl, SetQrCodeUrl] = useState("/images/qr/qr.png");
  //   const [InputFromUser, setInputFromUser] = useState("");
  //   const API = import.meta.env.VITE_MAKE_QRCODE_API;
  const [ScanResult, setScanResult] = useState(null);
  //   const startUrlMaker = () => {
  //     if (InputFromUser.length > 1) {
  //       const uri = `${API}${InputFromUser}`;
  //       SetQrCodeUrl(uri);
  //     }
  //   };

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    scanner.render(success, err);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }
    function err(err) {
      console.warn(err);
    }
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6 pt-[4rem]">
      <div className="flex flex-col text-center">
        <h1 className="text-4xl font-bold ">SCAN QRCODE</h1>
        <p>Upload your Qr code</p>
      </div>

      {ScanResult ? (
        <div className="flex h-72 w-80 items-center justify-center border-solid bg-slate-500">
          <div className="flex flex-col gap-5 text-center">
            <h1 className="text-2xl font-semibold">RESULT: </h1>
            <h3>{ScanResult}</h3>
            <Alerts
              message="Copy to your clipboard."
              onClick={() => navigator.clipboard.writeText(ScanResult)}
              buttonChildren="Copy"
              idModal="copy-modal"
            />
          </div>
        </div>
      ) : (
        <div className="h-72 w-80 bg-slate-500 text-base" id="reader"></div>
      )}

      <div>powered by ScanApp</div>
    </div>
  );
};

export default ScanQr;
