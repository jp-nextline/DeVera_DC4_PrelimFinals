function StudentCard(props) {
  return (
    <div className="student-card">
      <h2>{props.name}</h2>
      
      <p>Age: {props.age}</p>

      <p>Course: {props.course}</p>

      <p>{props.isRegular ? "Regular Student" : "Irregular Student"}</p>
    </div>
  );
}

export default StudentCard;