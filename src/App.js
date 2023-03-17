
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import HomePage from './components/Homepage';
import Puzzle from './components/Puzzle';
import {
  BrowserRouter,
  Route,
  Routes,

} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/puzzle" element={<Puzzle />} exact />
        </Routes>

      </BrowserRouter>
    </>




  );
}

export default App;
