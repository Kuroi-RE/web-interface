import { useState } from "react";
import axios from "axios";

const PostalCode = () => {
  const API_URI = import.meta.env.VITE_KODE_POS_API;

  const [Kota, SetKota] = useState("Botok");
  const [KodeList, SetKodeList] = useState([]);

  const getKode = async () => {
    if (Kota.length > 1) {
      const URI = `${API_URI}${Kota}`;
      const fetching = await axios({
        url: URI,
        method: "GET",
      });

      SetKodeList(fetching.data.data);
      console.log(fetching.data.data);
    }
  };

  return (
    <div
      data-aos="fade-up"
      className="h-full pt-[6rem] flex flex-col pb-5 items-center gap-6"
    >
      <div className="flex flex-col gap-4 md:flex-row">
        <input
          type="text"
          name="kode"
          className="input input-success"
          id="kode"
          onChange={(e) => SetKota(e.target.value)}
        />
        <input
          type="button"
          value="Search"
          className="btn"
          onClick={() => getKode()}
        />
      </div>

      <div>
        <div className="overflow-x-auto h-full w-[95vw] flex items-center justify-center">
          <table className="table max-sm:table-compact p-5">
            <thead>
              <tr>
                <th></th>
                <td>Province</td>
                <td>City</td>
                <td>Subdistrict</td>
                <td>Postal Code</td>
              </tr>
            </thead>
            {KodeList.map((data, key) => {
              return (
                <tbody key={key}>
                  <tr>
                    <th>{key + 1}</th>
                    <th>{data.province}</th>
                    <td>{data.city}</td>
                    <td>{data.subdistrict}</td>
                    <td>{data.postalcode}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default PostalCode;
