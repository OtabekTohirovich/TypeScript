import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/person";
import Personlist from "./components/personlist";

function App() {
  const personName = {
    first: "begzot",
    last: "boburov",
  };
  const nameList = [
    {
      first: "begzot",
      last: "boburov",
    },
    {
      first: "begzot",
      last: "boburov",
    },
    {
      first: "eli",
      last: "jek",
    },
  ];
  return (
    <div className="App">
      <Greet name="wishvas" massage={23} isLoggedIn={false} />
      <Person name={personName} />
      <Personlist names={nameList} />
    </div>
  );
}

export default App;
