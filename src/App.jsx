import { Link } from "react-router-dom";
import "./App.css";
import { ValorantRoutes } from "./routes/Routes";

function App() {
  return (
    <div>
      <header>
        <h1 className="title">Agents Of Valorant</h1>
      </header>

      <ValorantRoutes />
    </div>
  );
}

export default App;
