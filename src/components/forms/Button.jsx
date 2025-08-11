import './forms.css';

const Button = ({label, bgColor, color, onClick}) => {
    return (
        <button className='button' style={{background: bgColor, color: color}} onClick={onClick}>{label}</button>
    )
}

export default Button;