import { useState } from "react";
import axios from "axios";
const CekResi = () => {
  const API_KEY = import.meta.env.VITE_BINDER_APIKEY;
  const [Courier, SetCourier] = useState("");
  const [Resi, SetResi] = useState("");
  const [Data, SetData] = useState([]);
  const [IsDone, SetIsDone] = useState(false);
  const [ErrMsg, SetErrMsg] = useState("MENUNGGU DATA..");

  const URI = `https://api.binderbyte.com/v1/track?api_key=${API_KEY}&courier=${Courier}&awb=${Resi}`;

  const GetData = async () => {
    if (Resi.length > 5) {
      try {
        SetErrMsg("MENCARI DATA...");
        const fetching = await axios({
          url: URI,
          method: "GET",
        });
        SetIsDone(true);
        SetData(fetching.data.data);
        // console.log(fetching.data.data);
      } catch (error) {
        SetIsDone(false);
        SetErrMsg("TIDAK ADA DATA.");
      }
    }
  };

  // console.log(Data.history);

  return (
    <div
      data-aos="fade-up"
      className="flex min-h-screen flex-col items-center justify-start gap-6 pb-10 pt-[4rem]"
    >
      <div className="flex h-32 w-full items-center justify-center bg-blue-500">
        <h1 className="text-5xl font-extrabold">CEK RESI</h1>
      </div>
      <div className="flex flex-col gap-5">
        <select
          defaultValue={"NOTE"}
          onChange={(e) => SetCourier(e.target.value)}
          className="select-info select w-full max-w-xs"
        >
          <option disabled value="NOTE">
            Pilih Kurir
          </option>
          <option>JNT</option>
          <option>JNE</option>
        </select>
        <input
          type="text"
          name="resi"
          id="resi"
          className="input-secondary input"
          onChange={(e) => SetResi(e.target.value)}
        />

        <button className="btn-success btn" onClick={() => GetData()}>
          CEK RESI
        </button>
      </div>

      <div className="text-xs">
        {IsDone ? (
          <div>
            <div className="flex  justify-center ">
              <h1 className="text-3xl">DATA DITEMUKAN :</h1>
            </div>
            <div>
              <div className="flex  justify-center ">
                <h1 className="text-xl">DETAILS:</h1>
              </div>
              <ul className="flex flex-col items-start justify-start gap-5 px-4">
                <li>RESI : {Data.summary.awb}</li>
                <li>KURIR : {Data.summary.courier}</li>
                <li>WAKTU : {Data.summary.date}</li>
                <li>STATUS : {Data.summary.status}</li>
              </ul>
            </div>
            <div className="flex flex-col md:items-center md:justify-center">
              <div className="flex justify-center ">
                <h1 className="text-xl">HISTORY</h1>
              </div>
              <div className="flex items-center">
                <ul className="steps steps-vertical flex h-full w-screen flex-col items-start justify-start gap-5 px-4 ">
                  {Data.history
                    .slice(0)
                    .reverse()
                    .map((item, key) => {
                      return (
                        <li
                          className="step-primary step flex flex-row items-start gap-5"
                          key={key}
                        >
                          <div className="flex flex-col items-start justify-start">
                            <p>{item.date}</p>
                            <h2>{item.desc}</h2>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center">
            <div className="mockup-code">
              <pre data-prefix="$">
                <code>Waiting your input..</code>
              </pre>
              <pre data-prefix=">" className="text-warning">
                <code>{ErrMsg}</code>
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CekResi;
