const Alerts = ({
  buttonChildren,
  buttonOnClick,
  message,
  className,
  onClick,
  idModal,
}) => {
  return (
    <div>
      <label
        htmlFor={idModal ? idModal : "my-modal-2"}
        onClick={buttonOnClick}
        className={
          className ? `btn font-semibold ${className}` : "btn font-semibold"
        }
      >
        {buttonChildren}
      </label>

      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id={idModal ? idModal : "my-modal-2"}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={idModal ? idModal : "my-modal-2"}
            onClick={onClick}
            className="btn-sm btn-circle btn absolute right-2 top-2"
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
