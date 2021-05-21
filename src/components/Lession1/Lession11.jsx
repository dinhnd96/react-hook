function Lession11(props) {
  const posts = [
    {
      id: 1,
      title: "Học Javascript",
      content: "Chào mừng bạn đền Javascript!",
    },
    {
      id: 2,
      title: "Học React.js",
      content: "Bạn có thể bắt đầu học React.js sau khi cài đặt.",
    },
  ];

  return (
    <div>
      {posts.map((post, index) => (
        <div key={post.id}>
          <li>{post.title}</li>
        </div>
      ))}
      <div>
        {posts.map((post, index) => (
          <div>
            <h1>{post.title}</h1>
            <h2>{post.content}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lession11;
