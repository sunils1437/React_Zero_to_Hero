const Button = (props) =>{
    return (
        <span>
            <button className="btn" onClick={props.eventName}>{props.btnName}</button>
        </span>
    )
}

export default Button;