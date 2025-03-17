import "./barra.css";

const Barra = ({ title, onClose }) => {
  return (
    <div className="bar">
      <p>{title}</p>
      <button id="closeBtn" className="shadow" onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8px"
          height="7px"
          viewBox="0 0 8 7"
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
        >
          <path d="M1 6V5h1V4h1V3h2v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1zm0-4V1H0V0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H2V2H1z" />
        </svg>
      </button>
    </div>
  );
};

export default Barra;
