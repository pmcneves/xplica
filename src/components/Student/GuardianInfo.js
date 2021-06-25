import { useContext } from 'react'
import {studentInfo} from '../../screens/Student'
import { Container, Row, Col, Form } from "react-bootstrap"

const GuardianInfo = () => {

    const info = useContext(studentInfo)
    console.log(info)
    return (
        <Container className="h-75 text-center student__animation">
            <Row className="mb-3">
                <Col xs={6} md={4} className="mb-2">
                    <Form.Label className="student__label">Encarregado/a</Form.Label>
                    <p className="student__text">{info.guardian.name}</p>
                </Col>
                <Col xs={6} md={4} className="mb-2">
                    <Form.Label className="student__label">Parentesco</Form.Label>
                    <p className="student__text">{info.guardian.kinship}</p>
                </Col>
                <Col xs={12} md={4} className="mb-2">
                    <Form.Label className="student__label">Email</Form.Label>
                    <p className="student__text">{info.guardian.guardianEmail}</p>
                </Col>
                <Col xs={12} md={4} className="mb-2">
                    <Form.Label className="student__label">Telemóvel</Form.Label>
                    <p className="student__text">{info.guardian.guardianContact}</p>
                </Col>
                <Col xs={12} md={8} className="mb-2"> 
                    <Form.Label className="student__label">Observações</Form.Label>
                    <p className="student__text">{info.guardian.guardianObservations}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default GuardianInfo
