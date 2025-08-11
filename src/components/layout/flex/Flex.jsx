const Flex = ({children, flex, width, height}) => {
    const flexWidth = width && width!=='' ? width : 'max-content';
    const flexHeight = height && height!=='' ? height : 'max-content';
    return (
        <div style={{width: flexWidth, height: flexHeight}} className={flex === 'vertical' ? 'flex-vertical' : 'flex-horizontal'}>{children}</div>
    )
}

export default Flex;