import "./App.css"
import {localenv} from "./env"

function App() {
  return (
    <div className="mainDivFull">
      <p className="text-info">{localenv.apiHostname}
      </p>
    </div>
  );
}

export default App;
