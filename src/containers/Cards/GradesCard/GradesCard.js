import { useContext } from "react"
import { studentInfo } from "../../../screens/Student"
import { Container, Row, Col, Modal, Button } from "react-bootstrap"
import { useState } from 'react'
import GradesModal from "../../../components/Student/GradesModal"

const GradesCard = () => {
    const {subjects} = useContext(studentInfo).tutoring
    const [isModalOpen, setIsModalOpen] = useState(false)

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
            <GradesModal isModalOpen={isModalOpen} handleModalClose={handleModalClose}/>
        </Container>


    )
}

export default GradesCard
