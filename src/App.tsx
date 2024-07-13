import { Suspense, lazy } from "react";
import "./App.scss";
import Loading from "./components/Loading";
const Navbar = lazy(() => import("./components/Navbar"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Navbar />
        <button type="button" className="btn btn-primary">
          Primary
        </button>
        <button type="button" className="btn btn-secondary">
          Secondary
        </button>
        <button type="button" className="btn btn-success">
          Success
        </button>
        <button type="button" className="btn btn-danger">
          Danger
        </button>
        <button type="button" className="btn btn-warning">
          Warning
        </button>
        <button type="button" className="btn btn-info">
          Info
        </button>
        <button type="button" className="btn btn-light">
          Light
        </button>
        <button type="button" className="btn btn-dark">
          Dark
        </button>
      </Suspense>
    </div>
  );
}

export default App;
