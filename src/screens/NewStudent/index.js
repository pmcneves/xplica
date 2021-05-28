import { Container } from 'react-bootstrap'
import StudentForm from "../../containers/StudentForm/StudentForm"
import { useDispatch } from "react-redux";
import { addStudent } from "../../screens/Explicador/actions";
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react';


const NewStudent = () => {

    const dispatch = useDispatch()

    //get subjects
    // const [subjects, setSubjects] = useState([''])
    const [numberOfSubjects, setNumberOfSubjects] = useState(0)

    //add student to db
    const addEntry = (data) => {

        dispatch(addStudent({
            id: uuidv4(),
            info: {
                ...data,
                // firstName: null,
                // lastName: null,
                guardianFirstName: null,
                guardianLastName: null,
                name: `${data.name.firstName} ${data.name.lastName}`,
                guardianName: `${data.guardianFirstName} ${data.guardianLastName}`
            }
        }))
    }

    return (
        <Container>
            <StudentForm addEntry={addEntry} setNumberOfSubjects={setNumberOfSubjects} />
        </Container>
    )
}

export default NewStudent
