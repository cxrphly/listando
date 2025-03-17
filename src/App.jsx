import { useState } from "react";
import Window from "./components/Window";
import Welcome from "./components/Welcome";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div>
      <Window />

      {showWelcome && <Welcome onClose={() => setShowWelcome(false)} />}
    </div>
  );
}

export default App;
