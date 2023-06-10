import { useEffect, useState } from "react";
import CardsData from "./CardsData";
import CardsList from "./CardsList";
import { slice } from "lodash";

function Cards() {
  const [CardData, setCardData] = useState([CardsData()]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(4);
  const initialPosts = slice(CardData, 0, index);

  const getData = () => {
    setCardData(CardsData());
  };

  const LoadMore = () => {
    setIndex(index + 4);
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
    <div className="flex flex-col items-center gap-5 pb-5 pt-24 ">
      <div className="flex flex-col  md:gap-20">
        <div className="flex flex-col flex-wrap items-center justify-center gap-5 px-10 py-5 md:flex-row md:gap-20 ">
          {/* CARDs  */}
          {initialPosts.map((data, key) => {
            return (
              <div data-aos="fade-up" key={key}>
                <CardsList
                  card_name={data.card_name}
                  card_description={data.card_description}
                  card_path={data.card_path}
                />
              </div>
            );
          })}
        </div>
        <div
          data-aos="fade-up"
          data-delay="0"
          data-aos-offset="0"
          className="mb-5 mt-3 flex items-center justify-center"
        >
          {isCompleted ? (
            <button
              onClick={LoadMore}
              type="button"
              className="btn-error disabled btn"
            >
              Completed
            </button>
          ) : (
            <button
              onClick={LoadMore}
              type="button"
              className="btn-success btn"
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
