import './layout.css';

const Center = ({children, width, height, type, bgColor}) => {
    const centerWidth = width && width!=='' ? width : 'max-content';
    const centerHeight = height && height!=='' ? height : 'max-content';
    const centerClass = type && type === 'vertical' ? 'center-vertical' :
        type && type === 'horizontal' ? 'center-horizontal' : 'center';
    return (
        <div style={{width: centerWidth, height: centerHeight, backgroundColor: bgColor}} className={centerClass}>{children}</div>
    )
}

export default Center;