import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landingpage from "./components/LandingPage";
import QuizPage from "./Pages/QuizPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
