import EventImg from '../../assets/images/events.png';
import Card from '../ui/Card';
import './Concept.css';

function Concept(props){
    return(
        <Card className="concept">
            <img src={EventImg} />
            <h2>{props.concept.title}</h2>
            <p>{props.concept.description}</p>
        </Card>
    );
}

export default Concept;