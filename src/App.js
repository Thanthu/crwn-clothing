import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./routes/home/Home";

function NavBar() {
  return (
    <div>
      <div>
        <h1>I am the navigation bar</h1>
      </div>
      <Outlet />
    </div>
  );
}

function Shop() {
  return <h1>I am the Shop page</h1>
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />} >
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
