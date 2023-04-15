import Data from "./components/Data";
import Student from "./components/Student";
import { useState, useEffect } from 'react'



function App() {
  const [students, setStudents] = useState([...Data]);

  function print(item) {
    console.log(item)
  };
  // print(studentsData);


  return (
    <div className="App">
      <div className="header">
        <h1>STUDENTS</h1>
        <hr /><hr />
      </div>
      {students.map((student, idx) => (
        <div>
          <Student key={idx}
            name={student.name}
            bio={student.bio}
            scores={student.scores} />
            <hr/>
        </div>
        
        ))}
     </div>
  );
}

export default App;
