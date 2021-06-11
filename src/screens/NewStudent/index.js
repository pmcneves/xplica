import { Container } from 'react-bootstrap'
import StudentForm from "../../containers/StudentForm/StudentForm"
import { useDispatch } from "react-redux";
import { submitStudent } from "../../screens/Explicador/actions";
import { v4 as uuidv4 } from 'uuid'
import { useHistory } from 'react-router';

const NewStudent = () => {
    const dispatch = useDispatch()
    const history = useHistory();

    //add student to db
    const addEntry = (data) => {
        dispatch(submitStudent({
            id: uuidv4(),
            info: {
                ...data,
                student: {
                    ...data.student,
                    name: `${data.student.name.firstName} ${data.student.name.lastName}`,
                },
                guardian: {
                    ...data.guardian,
                    name: `${data.guardian.name.guardianFirstName} ${data.guardian.name.guardianLastName}`
                }
            }
        }))
        history.push('/alun@s')
    }

    return (
        <Container>
            <StudentForm addEntry={addEntry}/>
        </Container>
    )
}

export default NewStudent
