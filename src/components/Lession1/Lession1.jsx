function Lession1(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => <li>{number * 2}</li>);
  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];

export default Lession1;
