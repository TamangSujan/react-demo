import Label from "./Label.jsx";
import FlexStart from "../layout/flex/FlexStart.jsx";

const Checkbox = ({label, onChange}) => {
    return (
        <FlexStart>
            <input type='checkbox' onChange={onChange}/>
            {label && label.length ? <Label label={label} color='#AAAAAA' size='0.75em'/> : null}
        </FlexStart>
    )
}

export default Checkbox;