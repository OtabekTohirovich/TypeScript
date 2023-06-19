import React from "react";

type GreetProps = {
  name: string;
  massage?: number;
  isLoggedIn: boolean;
};

// type props you must give

const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          {props.name} Greet {props.massage}
        </h2>
      ) : (
        "hello"
      )}
    </div>
  );
};

export default Greet;
