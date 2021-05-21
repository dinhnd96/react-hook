const member = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit proin sit amet neque.",
  info: {
    path: "https://www.imagesjunction.com/images/img/cat_images.jpg",
    name: "Nguyễn Văn A",
    age: 25,
  },
};
function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.info.path} alt="" width="250" height="250" />
    </div>
  );
}

function MemberInfo(props) {
  return (
    <div className="info">
      <h2>{props.info.name}</h2>
      <p>Tuổi: {props.info.age}</p>
    </div>
  );
}

function Comment(props) {
  return <div className="comment">{props.text}</div>;
}

function Lession3() {
  return (
    <div className="member">
      <Avatar info={member.info} />
      <MemberInfo info={member.info} />
      <Comment text={member.text} />
    </div>
  );
}

export default Lession3;
