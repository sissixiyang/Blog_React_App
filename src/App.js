
import "./App.css";
import React from "react";
import {useSelector} from "react-redux";
import Homepage from "./Component/Homepage";
import Navbar from "./Component/Navbar"
import Blog from "./Component/Blog"
import {selectSignedIn} from "./features/userSlice"
function App() {
  const isSignedIn = useSelector(selectSignedIn)
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      {isSignedIn &&<Blog />}
    </div>
  );
}

export default App;
