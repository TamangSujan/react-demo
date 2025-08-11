import './layout.css';

const Padding = ({children, padding}) => {
    return (
        <div style={{padding: padding}} className='padding'>
            {children}
        </div>
    )
}

export default Padding;