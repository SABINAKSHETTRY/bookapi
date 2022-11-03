import Display from "./Components/Display";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Description from "./Components/Description";
function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                

                <Routes>
                    <Route path="/description" element={<Description />} />
                    <Route path="/" element={<Display />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
