import EventImg from '../../assets/images/events.png';

function Concept(props){
    return(
        <div>
            <img src={EventImg} />
            <h2>{props.concept.title}</h2>
            <h2>{props.concept.description}</h2>
        </div>
    );
}

export default Concept;