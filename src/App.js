import { Routes, Route } from "react-router-dom";

import NavBar from "./routes/navbar/NavBar";
import Home from "./routes/home/Home";
import SignIn from "./routes/sign-in/SignIn";

function Shop() {
  return <h1>I am the Shop page</h1>
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />} >
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
