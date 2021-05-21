function Lession1() {
  const arrays = [1, 2, 3, 4, 5, 6];
  const doubles = arrays.map((number, i) => <div key={i}>{number * 2}</div>);

  return (
    // <div>
    //   {arrays.map((number, i) => (
    //     <div key={i}>
    //       <li>{number * 2}</li>
    //     </div>
    //   ))}
    // </div>
    <div>{doubles}</div>
  );
}
export default Lession1;
