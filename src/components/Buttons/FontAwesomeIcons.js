import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const FontAwesomeIcons = ({icon, classes, fn}) => (
    <button className={`btn ${classes}`} onClick={fn}>
        <FontAwesomeIcon icon={icon}/>
    </button>
)

export default FontAwesomeIcons
