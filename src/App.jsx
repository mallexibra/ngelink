import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Button from "./components/Button";
import Description from "./components/Description";
import Profile from "./components/Profile";
import Sosmed from "./components/Sosmed";
import Home from "./pages/Home";
import Certificated from './pages/Certificated'

function App() {
  const [valid, setValid] = useState(1);

  return (
    <div className='container w-[50%] m-auto text-white'>
      <Profile />
      <Description />
      <Sosmed />
      <Router>
        <Link to={"/"}>
          <Button
            kelas={valid == 1 ? "border-b-4" : ""}
            onClick={() => {
              setValid(1);
            }}
          >
            Home
          </Button>
        </Link>
        <Link to={"/certificated"}>
          <Button
            kelas={valid == 2 ? "border-b-4" : ""}
            onClick={() => {
              setValid(2);
            }}
          >
            Certificated
          </Button>
        </Link>
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/certificated' Component={Certificated}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
