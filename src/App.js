import "./styles/common.css";
import {MenuRoutes} from "./routes/MenuRoutes";
import {ScrollToTop} from "./components/allComponents";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <MenuRoutes />
    </div>
  );
}

export default App;
