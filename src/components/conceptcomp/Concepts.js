import Concept from './Concept.js';
import './Concepts.css';

function Concepts(props){
    return(
        <div className='concepts'>
            <Concept concept={props.concepts[0]}/>
            <Concept concept={props.concepts[1]}/>
            <Concept concept={props.concepts[2]}/>
        </div>
    );
}

export default Concepts;