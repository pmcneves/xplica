import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Icon = ({icon, fn, classes}) => (            
    <FontAwesomeIcon 
        onClick={fn} 
        className={`student__icon m-1 ${classes}`}
        icon={icon}/>
)


export default Icon
