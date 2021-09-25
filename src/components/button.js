import "./buttons.css";

function Button({ filter }) {
  return (
    <div className="button-container">
      <button type="button" onClick={() => filter("ALL")}>
        ALL
      </button>
      <button type="button" onClick={() => filter("LOCAL")}>
        Local
      </button>
      <button type="button" onClick={() => filter("QOBUZ")}>
        Qobuz
      </button>
    </div>
  );
}

export default Button;
