import KeyConceptImg from '../../assets/images/key-concepts.png';
import './Intro.css';

function Intro(){
    return (
        <div className="intro">
            <img src={KeyConceptImg} />
            <h2>Key React Concepts</h2>
            <p>Second key react concept you should know</p>
        </div>
    );
}

export default Intro;