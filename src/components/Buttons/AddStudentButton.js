import './styles.scss'
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import FontAwesomeIcons from "./FontAwesomeIcons"
import { Link } from "react-router-dom"


const AddStudentButton = (props) => {    
    return (
        <div onClick={props.showAddStudentHandler}>
            {/* <Link to="/adicionar"> */}
                <FontAwesomeIcons icon={faPlusCircle}/>
            {/* </Link> */}
        </div>
    )
}

export default AddStudentButton
