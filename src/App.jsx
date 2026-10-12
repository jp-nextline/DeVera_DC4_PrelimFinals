import Header from "./Header.jsx";
import StudentCard from "./StudentCard.jsx";
import AttendanceCounter from "./AttendanceCounter.jsx";

function App() {
  return (
    <div className="app">
      <Header />

      <h2>Student List</h2>
      <div className="student-list">
        <StudentCard
          name="Angel Cruz"
          age={20}
          course="BSIT"
          isRegular={true}
        />
        <StudentCard
          name="Mark Santos"
          age={21}
          course="BSIT"
          isRegular={false}
        />
        <StudentCard
          name="Maria Reyes"
          age={20}
          course="BSIT"
          isRegular={true}
        />
      </div>

      <AttendanceCounter />
    </div>
  );
}

export default App;
