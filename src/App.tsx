import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/person";
import Personlist from "./components/personlist";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscer from "./components/Oscer";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";

function App() {
  const personName = {
    first: "begzot",
    last: "boburov",
  };
  const nameList = [
    {
      first: "bewgzot",
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

      <Status status="error" />
      <Oscer>
        <Heading>Placeholder text</Heading>
      </Oscer>

      <Button
        handleclick={(event, id) => {
          console.log("buttonclick", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container style={{border: '1px solid', padding: 10, display: 'flex'}}/>
    
    </div>

  );
}

export default App;
