import React from "react";
import CardsData from "./CardsData";
import CardsList from "./CardsList";

export default function Cards() {
  return (
    <div className="flex flex-col items-center gap-5 pt-24 pb-5 ">
      <div className="flex flex-col  md:gap-20">
        <div className="px-10 py-5 flex items-center justify-center flex-col flex-wrap md:flex-row md:gap-20 gap-5">
          {/* CARDs  */}
          {CardsData().map((data, key) => {
            return (
              <React.Fragment key={key}>
                <CardsList
                  card_name={data.card_name}
                  card_description={data.card_description}
                  card_path={data.card_path}
                />
              </React.Fragment>
            );
          })}
          {/* CARDs  */}
        </div>
      </div>
    </div>
  );
}
