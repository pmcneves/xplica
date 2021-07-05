import { useContext } from "react"
import { studentInfo } from "../../../screens/Student"
import { Container, Row, Col, Button } from "react-bootstrap"
import { useState, useEffect } from 'react'
import GradesModal from "../../../components/Student/GradesModal"


const GradesCard = () => {
    const studentData = useContext(studentInfo)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [assessmentNumber, setAssessmentNumber] = useState(0)

    useEffect(() => {
        if(studentData.assessments !== undefined)
            setAssessmentNumber(studentData.assessments.length)
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // console.log(studentData, assessmentNumber)

    const handleModalOpen = () => {
        setIsModalOpen(true)
    }
    const handleModalClose = () => {
        setIsModalOpen(false)
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
            <GradesModal isModalOpen={isModalOpen} handleModalClose={handleModalClose} studentData={studentData} assessmentNumber={assessmentNumber}/>
        </Container>


    )
}

export default GradesCard
