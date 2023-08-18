import Card from '../ui/Card';
import './Concept.css';

function Concept(props){
    return(
        <Card className="concept">
            <img src={props.concept.image} />
            <h3>{props.concept.title}</h3>
            <p>{props.concept.description}</p>
        </Card>
    );
}

export default Concept;