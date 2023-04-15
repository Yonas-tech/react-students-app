import Score from "./Score";
import { useState } from 'react';

const Student = (props) => {
    const [scoresData, setScoresData] = useState([...props.scores])

    return (
        <div className="student">
            <h2 className="name">Name: {props.name}</h2>
            <p className="bio">Bio: {props.bio}</p>
            {scoresData.map((scoreDate, idx) =>
                <Score key={idx} score={scoreDate.score} date={scoreDate.date}/>
            )}
        </div>
    );
}

export default Student;


// Renders the student's name & bio properties
// Renders a <Score> component for each score object in the student's scores property.
