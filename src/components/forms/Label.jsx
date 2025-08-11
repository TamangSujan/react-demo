import './forms.css'

const Label = ({label, bold, color, size}) => {
    return (
        <label className='label' style={{color: color, fontSize: size, fontWeight: bold ? 'bold': 'plain'}}>{label}</label>
    )
}

export default Label;