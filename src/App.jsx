import { Outlet } from "react-router-dom";
import Nav from "./Components/Nav";

function App() {
  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
    </>
  );
}

export default App;
