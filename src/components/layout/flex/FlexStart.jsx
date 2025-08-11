const FlexStart = ({children, flex}) => {
    return (
        <div className={flex === 'vertical' ? 'flex-start-vertical' : 'flex-start-horizontal'}>{children}</div>
    )
}

export default FlexStart;