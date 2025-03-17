import "./resolutionInput.css";

const ResolutionInput = () => {
  return (
    <div className="inputRes">
      <h3>Folha em milimetros.</h3>
      <input
        id="input_width"
        type="number"
        className="input"
        placeholder="largura"
      />
      <input
        id="input_height"
        type="number"
        className="input"
        placeholder="altura"
      />
    </div>
  );
};

export default ResolutionInput;
