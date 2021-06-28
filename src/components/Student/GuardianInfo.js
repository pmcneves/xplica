import { useContext } from 'react'
import {studentInfo} from '../../screens/Student'
import { Container, Row, Col } from "react-bootstrap"

const GuardianInfo = () => {

    const {guardian} = useContext(studentInfo)

    return (
        <Container className="h-75 text-center student__animation">
            <Row className="mb-3">
                <Col xs={6} md={4} className="mb-2">
                    <label className="student__label">Encarregado/a</label>
                    <p className="student__text">{guardian.name}</p>
                </Col>
                <Col xs={6} md={4} className="mb-2">
                    <label className="student__label">Parentesco</label>
                    <p className="student__text">{guardian.kinship}</p>
                </Col>
                <Col xs={12} md={4} className="mb-2">
                    <label className="student__label">Email</label>
                    <p className="student__text">{guardian.guardianEmail}</p>
                </Col>
                <Col xs={12} md={4} className="mb-2">
                    <label className="student__label">Telemóvel</label>
                    <p className="student__text">{guardian.guardianContact}</p>
                </Col>
                <Col xs={12} md={8} className="mb-2"> 
                    <label className="student__label">Observações</label>
                    <p className="student__text">{guardian.guardianObservations}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default GuardianInfo
