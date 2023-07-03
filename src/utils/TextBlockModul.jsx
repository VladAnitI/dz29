import './TextBlockClass.css';

const TextBlockModul = ({text, className}) => {
    return(
        <div className={className}>{text}</div>
    )
}

export default TextBlockModul;