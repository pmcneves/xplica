import { useContext } from "react"
import { studentInfo } from "../../../screens/Student"
import { Container, Row, Col, Button } from "react-bootstrap"
import { useState } from 'react'
import GradesModal from "../../../components/Student/GradesModal"
import { useDispatch, useSelector } from 'react-redux'
import { newStudentAssessment } from "../../../screens/Student/actions"
import { v4 as uuidv4 } from 'uuid'


const GradesCard = () => {
    const studentData = useContext(studentInfo)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const dispatch = useDispatch()

    const currentStudentId = useSelector(state=>state.studentInfo.studentId)

    console.log(studentData)

    const handleModalOpen = () => {
        setIsModalOpen(true)
    }
    const handleModalClose = () => {
        setIsModalOpen(false)
    }

    const addNewAssessment = data => {
        const transformedData = {
            assessmentId: uuidv4(),
            currentStudentId,
            assessmentInfo: {
                ...data,
                date: data.date.toLocaleString().split(',')[0]
            }
        }
        dispatch(newStudentAssessment(transformedData))
    }


    return (
        <Container>
            <div className="student__name text-center">
                Avaliações
            </div>
            <Row>
                <Col>
                    <Button 
                        variant="dark"
                        onClick={handleModalOpen}>
                            adicionar
                    </Button>
                </Col>
            </Row>
            <GradesModal isModalOpen={isModalOpen} handleModalClose={handleModalClose} studentData={studentData} addNewAssessment={addNewAssessment}/>
        </Container>


    )
}

export default GradesCard
