import './forms.css';

const Input = ({placeholder, type, onChange}) => {
    return (
        <input className='input' type={type && type!=='' ? type : 'text'} placeholder={placeholder} onChange={onChange}/>
    )
}

export default Input;