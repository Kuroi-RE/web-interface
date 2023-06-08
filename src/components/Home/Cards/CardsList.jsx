import { Link } from "react-router-dom";

const CardsList = (props) => {
  return (
    <div className="card w-72 bg-primary text-primary-content shadow-lg">
      <div className="card-body">
        <h2 className="card-title">{props.card_name}</h2>
        <p>{props.card_description}</p>
        <div className="rating rating-md">
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-red-500"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-red-500"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-red-500"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-red-500"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-red-500"
            defaultChecked
          />
        </div>
        <div className="card-actions justify-end">
          <Link to={props.card_path} className="btn">
            USE NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardsList;
