import Concept from './Concept.js';

function Concepts(props){
    return(
        <div>
            <Concept concept={props.concepts[0]}/>
            <Concept concept={props.concepts[1]}/>
            <Concept concept={props.concepts[2]}/>
        </div>
    );
}

export default Concepts;