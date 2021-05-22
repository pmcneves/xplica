import './styles.scss'
import AddStudentButton from "../../components/Buttons/AddStudentButton"
import TutorTable from "../../containers/TutorTable/TutorTable"
import StudentForm from "../../containers/StudentForm/StudentForm"
import { useState } from "react"


const ExplicadorMenu = () => {

    const [visibleClass, setVisibleClass] = useState('')
    const [addStudentVisibility, setAddStudentVisibility] = useState(false)

    const showAddStudentHandler = () => {
        setAddStudentVisibility(!addStudentVisibility);
        if(!addStudentVisibility) {
            setVisibleClass('visible')
        } else {
            setVisibleClass('')
        }
    }

    return (
       <div className="container">
            <AddStudentButton showAddStudentHandler={showAddStudentHandler}/>    
            <div id='toggle' className={`${visibleClass}`}>
                <StudentForm />
            </div> 
            <TutorTable/>
       </div>
   )
}

export default ExplicadorMenu
