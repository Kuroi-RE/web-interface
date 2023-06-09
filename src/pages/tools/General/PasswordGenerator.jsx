import { useState } from "react";
import Alerts from "../../../components/Utility/Alerts";
import generator from "generate-password-browser";

const PasswordGenerator = () => {
  const [Password, SetPassword] = useState("");
  const [Length, SetLength] = useState(8);
  const [NoteMessage, SetNoteMessage] = useState("Password Created");

  const createPassword = () => {
    if (Length >= 20) {
      SetNoteMessage("Cannot create Password above 20 digits.");
    } else if (Length <= 7) {
      SetNoteMessage("Cannot create Password Under 8 digits.");
    } else {
      const password = generator.generate({
        length: Length,
        numbers: true,
      });
      SetPassword(password);
    }
  };

  function copy() {
    navigator.clipboard.writeText(Password);
  }

  return (
    <div
      data-aos="fade-up"
      className="flex h-screen flex-col items-center justify-center gap-6 pt-[4rem]"
    >
      <div className="flex flex-col text-center">
        <h1 className="text-4xl font-bold ">PASSWORD MAKER</h1>
        <p>Click create and copy your secret password</p>
      </div>

      <div className="flex h-44 w-80 items-center justify-center rounded-md border">
        <div>
          <h3>{Password}</h3>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 md:flex-row">
        <label htmlFor="num" className="text-1xl">
          Password Length :
        </label>
        <input
          type="number"
          name="num"
          id="num"
          defaultValue="8"
          onChange={(e) => SetLength(e.target.value)}
          className="input-success input"
        />
      </div>
      <div className="flex w-full flex-col items-center gap-5">
        <Alerts
          buttonChildren="Create"
          idModal="my-modal"
          buttonOnClick={() => createPassword()}
          message={NoteMessage}
          className="btn w-40"
        />
        <Alerts
          buttonChildren="Copy"
          idModal="my-modal-2"
          buttonOnClick={() => copy()}
          message="Copy to your clipboard"
          className="btn w-40"
        />
      </div>
    </div>
  );
};

export default PasswordGenerator;
