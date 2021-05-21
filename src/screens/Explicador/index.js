import './styles.scss'
import AddStudentButton from "../../components/Buttons/AddStudentButton"
import TutorTable from "../../containers/TutorTable/TutorTable"
import StudentForm from "../../containers/StudentForm/StudentForm"
import useStudentsInfo from "../../hooks/useStudentsInfo"
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addStudent } from "./actions"
import {v4 as uuidv4} from 'uuid'

const ExplicadorMenu = () => {
    const {
        name,
        age,
        grade,
        contact,
        location,
        school,
        guardian,
        kinship,
        guardianContact,
        subject,
        teacherOfSubject,
        setName,
        setAge,
        setGrade,
        setContact,
        setLocation,
        setSchool,
        setGuardian,
        setKinship,
        setGuardianContact,
        setSubject,
        setTeacherOfSubject,
    } = useStudentsInfo()

    const dispatch = useDispatch()
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

    const addEntry = (e) => {
        e.preventDefault();
        dispatch(addStudent({
            id: uuidv4(),
            info: {
                name,
                age,
                grade,
                contact,
                location,
                school,
                guardian,
                kinship,
                guardianContact,
                subject,
                teacherOfSubject
            }
        }))
        setAddStudentVisibility(false)
        setVisibleClass('')
    }

    return (
       <div className="container">
            <AddStudentButton showAddStudentHandler={showAddStudentHandler}/>    
            <div id='toggle' className={`${visibleClass}`}>
                <StudentForm 
                name={name} 
                setName={setName}
                grade={grade}
                age={age}
                contact={contact}
                location={location}
                school={school}
                guardian={guardian}
                kinship={kinship}
                guardianContact={guardianContact}
                subject={subject}
                teacherOfSubject={teacherOfSubject}
                setAge={setAge}
                setGrade={setGrade}
                setContact={setContact}
                setLocation={setLocation}
                setSchool={setSchool}
                setGuardian={setGuardian}
                setKinship={setKinship}
                setGuardianContact={setGuardianContact}
                setSubject={setSubject}
                setTeacherOfSubject={setTeacherOfSubject}
                submitForm={addEntry}/>
            </div> 
            <TutorTable/>
       </div>
   )
}

export default ExplicadorMenu
