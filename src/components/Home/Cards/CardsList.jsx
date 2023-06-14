import { Link } from "react-router-dom";

const CardsList = (props) => {
  return (
    <div className="card w-72 bg-primary text-primary-content shadow-lg">
      <div className="card-body gap-3">
        <h2 className="card-title">{props.card_name}</h2>
        <p>{props.card_description}</p>
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
