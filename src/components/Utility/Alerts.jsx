// import PropTypes from "prop-types";

// Alerts.propTypes = {
//   buttonChildren: PropTypes.string,
//   message: PropTypes.string,
//   className: PropTypes.string,
//   onClick: PropTypes.object,
//   buttonOnClick: PropTypes.object,
// };

const Alerts = ({
  buttonChildren,
  buttonOnClick,
  message,
  className,
  onClick,
}) => {
  return (
    <div>
      <label
        htmlFor="my-modal-3"
        onClick={buttonOnClick}
        className={
          className ? `btn font-semibold ${className}` : "btn font-semibold"
        }
      >
        {buttonChildren}
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            onClick={onClick}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">NOTES 🌼</h3>
          <p className="py-4 font-bold">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Alerts;
