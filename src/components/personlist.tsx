type Personlist = {
  names: {
    first: string;
    last: string;
  }[];
};
const Personlist = (props: Personlist) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};

export default Personlist;
