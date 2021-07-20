
import { Container } from 'react-bootstrap'
import StudentForm from '../../containers/StudentForm/StudentForm'
import { useState } from 'react'

const EditStudent = ({match}) => {
    console.log(match.params.id)

    // const [default, setDefault] = useState('')
    // const [default, setDefault] = useState('')
    // const [default, setDefault] = useState()
    // const [default, setDefault] = useState('')
    // const [default, setDefault] = useState('')
    // const [textForUpdate, setTextForUpdate] = useState(false)

    return (
        <Container>
            <StudentForm />
        </Container>
    )
}

export default EditStudent
