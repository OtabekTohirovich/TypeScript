type PersonProp = {
  name: {
    first: string
    last: string
  };
};

const Person = (props: PersonProp) => {
  return <div>Otabek Tohirov {props.name.first} {props.name.last}</div>;
};

export default Person;
