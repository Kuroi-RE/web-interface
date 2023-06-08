import { useEffect, useState } from "react";
import CardsData from "./CardsData";
import CardsList from "./CardsList";
import { slice } from "lodash";

function Cards() {
  const [CardData, setCardData] = useState([CardsData()]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(3);
  const initialPosts = slice(CardData, 0, index);

  const getData = () => {
    setCardData(CardsData());
  };

  const LoadMore = () => {
    setIndex(index + 3);
    if (index >= CardData.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col items-center gap-5 pt-24 pb-5 ">
      <div className="flex flex-col  md:gap-20">
        <div className="px-10 py-5 flex items-center justify-center flex-col flex-wrap md:flex-row md:gap-20 gap-5 ">
          {/* CARDs  */}
          {initialPosts.map((data) => {
            return (
              <div data-aos="fade-up" key={data.id}>
                <CardsList
                  card_name={data.card_name}
                  card_description={data.card_description}
                  card_path={data.card_path}
                />
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center mt-3 mb-5">
          {isCompleted ? (
            <button
              onClick={LoadMore}
              type="button"
              className="btn btn-error disabled"
            >
              Completed
            </button>
          ) : (
            <button
              onClick={LoadMore}
              type="button"
              className="btn btn-success"
            >
              Load More
            </button>
          )}
          {/* CARDs  */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
