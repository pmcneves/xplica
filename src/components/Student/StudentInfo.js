import { useContext } from 'react'
import {studentInfo} from '../../screens/Student'
import { Container, Row, Col } from "react-bootstrap"

const StudentInfo = () => {
    const info = useContext(studentInfo)

    return (
        <Container className="text-center student__animation">
            <Row>
                <Col xs={6} md={4} className="mb-2">
                    <label className="student__label">Idade</label>
                    <p className="student__text">{info.student.age}</p>
                </Col>
                <Col xs={6} md={4} className="mb-2">
                    <label className="student__label">Ano/Turma</label>
                    <p className="student__text">{info.student.grade}</p>
                </Col>
                <Col xs={6} md={4} className="mb-2">
                    <label className="student__label">Morada</label>
                    <p className="student__text">{info.student.location}</p>
                </Col>
                <Col xs={6} md={4} className="mb-2">
                    <label className="student__label">Escola</label>
                    <p className="student__text">{info.student.school}</p>
                </Col>
                <Col xs={12} md={4} className="mb-2">
                    <label className="student__label">Email</label>
                    <p className="student__text">{info.student.email}</p>
                </Col>
                <Col xs={12} md={4} className="mb-2">
                    <label className="student__label">Telemóvel</label>
                    <p className="student__text">{info.student.contact}</p>
                </Col>         
            </Row>
        </Container>
    )
}

export default StudentInfo
