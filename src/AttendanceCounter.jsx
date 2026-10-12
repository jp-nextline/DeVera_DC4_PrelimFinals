import { useState } from "react";

function AttendanceCounter() {
  const [presentCount, setPresentCount] = useState(0);

  function markPresent() {
    setPresentCount((count) => count + 1);
  }

  function undo() {
    setPresentCount((count) => Math.max(0, count - 1));
  }

  function reset() {
    setPresentCount(0);
  }

  return (
    <div className="attendance-counter">
      <h2>Attendance Counter</h2>

      <p>Students Present: {presentCount}</p>

      <button onClick={markPresent}>Mark Present</button>

      <button onClick={undo}>Undo</button>
      
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default AttendanceCounter;