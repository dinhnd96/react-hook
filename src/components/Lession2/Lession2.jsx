function Lession2() {
  const user = [
    {
      id: 1,
      name: "Bùi Văn Tèo",
      age: 25,
    },
    {
      id: 2,
      name: "Trần Văn An",
      age: 29,
    },
    {
      id: 3,
      name: "Nguyễn Thị Bưởi",
      age: 22,
    },
  ];
  return (
    <div>
      {user.map((users) => (
        <div key={users.id}>
          <strong>
            <li>Tên: {users.name}</li>
          </strong>
          <p>Tuổi: {users.age}</p>
        </div>
      ))}
    </div>
  );
}

export default Lession2;
