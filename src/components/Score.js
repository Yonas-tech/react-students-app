
const Score = (props) => {

    return ( 
        <div className="score">
            <p>
                Score: {props.score} <br/>
                Date: {props.date}
            </p>    
        </div>
     );
}
 
export default Score;

// Code the <Score> component so that it renders the score object's date & score properties.