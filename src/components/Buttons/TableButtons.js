import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TableButtons = ({icon, fn}) => (
    <button className="tableBtn" onClick={fn}>
        <FontAwesomeIcon icon={icon} />
    </button>
)


export default TableButtons
