import { useState } from "react";
import axios from "axios";

export default function GetQuotes() {
  const Uri = "https://katanime.vercel.app/api/getrandom";

  const [Language, SetLanguage] = useState("Indonesia");

  const [Quotes, SetQuotes] = useState({
    quote: "Click GET QUOTE button and the quote will be display in here",
    char: "-Ramadhan-",
    anime: "N/a",
  });

  const GettingQuote = async () => {
    const data = (await axios.get(Uri)).data.result[0];
    if (Language.length > 4) {
      let lang;
      if (Language === "English") {
        lang = data.english;
      } else {
        lang = data.indo;
      }

      SetQuotes({
        quote: `"${lang}"`,
        char: `- ${data.character} -`,
        anime: `${data.anime}`,
      });
    }
  };

  // function SelectHandle(obj) {
  //   if (obj.value === "English") {
  //     SetLanguage("english");
  //   } else {
  //     SetLanguage("indo");
  //   }
  // }

  function copy() {
    navigator.clipboard.writeText(Quotes.quote);
  }

  return (
    <div className="h-screen flex flex-col items-center pt-32">
      <h1 className="text-xl font-bold">
        QUOTES by Anime <mark className="bg-blue-200">Character</mark>
      </h1>
      <div className="py-20 px-4 flex justify-center items-center text-center">
        <div>
          <p className="italic">{Quotes.quote}</p>
          <span className="font-bold"> {Quotes.char} </span>
          <h3 className="font-semibold">
            <span className="font-bold">Anime: </span>
            {Quotes.anime}
          </h3>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3">
        <div>
          <select
            defaultValue={"NOTE"}
            onChange={(e) => SetLanguage(e.target.value)}
            className="select select-info w-full max-w-xs"
          >
            <option disabled value="NOTE">
              Select language
            </option>
            <option>Indonesia</option>
            <option>English</option>
          </select>
        </div>
        <div>
          <button
            className="btn btn-accent w-28 font-semibold"
            onClick={() => GettingQuote()}
          >
            GET QUOTE
          </button>
        </div>
        {/* The button to open modal */}
        <div>
          {/* The button to open modal */}
          <label
            htmlFor="my-modal-3"
            className="btn w-28 font-semibold"
            onClick={() => copy()}
          >
            Copy
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">NOTES</h3>
              <p className="py-4">Saved to your clipboard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
