
import '../styles/FOInput.css';

const FOInput = (props) => {
    return (
        <div className="fo-input-wrapper">
            <input type={props.type} className={props.className} placeholder={props.placeholder} name={props.name} style={props.style}/>
        </div>
    );
}

export default FOInput;