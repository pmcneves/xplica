import {useHistory} from 'react-router-dom'
import { useContext, useState } from "react"
import { Button, Container, Modal } from "react-bootstrap"
import GuardianInfo from "../../../components/Student/GuardianInfo"
import StudentIcons from "../../../components/Student/StudentIcons"
import StudentInfo from "../../../components/Student/StudentInfo"
import {studentInfo} from '../../../screens/Student'

const StudentCard = ({activeStudentId}) => {
    const history = useHistory();
    const info = useContext(studentInfo)
    const [divToShow, setDivToShow] = useState(1)
    const {name} = info.student

    //edit student modal
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openEditStudentModal = () => {
        setIsModalOpen(true)
    }
    const closeEditStudentModal = () => {
        setIsModalOpen(false)
    }
    const pushToEditPage = () => {
        history.push(`/alun@/${activeStudentId}/editar`)
    }

    const getDiv = (divNumber) => {
        switch(divNumber) {
            case 1:
                return <StudentInfo />
            case 2:
                return <GuardianInfo />
            default:
                return <StudentInfo />
        }
    }

    return (
        <Container>
            <div className="student__name mt-3 mb-2">
                {name}
            </div>
            <StudentIcons setDivToShow={setDivToShow} divToShow={divToShow}/>
            <div style={{minHeight:'150px'}}>
                {getDiv(divToShow)} 
            </div>
            <div>
                <Button variant="dark" onClick={openEditStudentModal}>Editar informações</Button>
            </div>
            <Modal
                show={isModalOpen}
                onHide={closeEditStudentModal}
                centered
                animation={false}>
                    <Modal.Header closeButton>
                        Atualizar informações
                    </Modal.Header>
                    <Modal.Body>
                        Pretende editar os dados d@ {name}?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeEditStudentModal}>
                            Fechar
                        </Button>
                        <Button variant="primary" onClick={pushToEditPage}>
                            Confirmar
                        </Button>
                    </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default StudentCard
