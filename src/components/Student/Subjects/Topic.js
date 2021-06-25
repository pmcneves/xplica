import { Container, Row, Col, Form } from "react-bootstrap"

const Topic = ({subject}) => (
    <Container>
        <Row>
            <Col>
                <Form.Label className="student__label">Regime</Form.Label>
                <p className="student__text">{subject.attendance}</p>
            </Col>
            <Col>
            <Form.Label className="student__label">Condições</Form.Label>
                <p className="student__text">{subject.conditions}</p>
            </Col>
        </Row>
        <Row>
            <Col>
                <Form.Label className="student__label">Horas/semana</Form.Label>
                <p className="student__text">{subject.durationPerWeek}</p>
            </Col>
            <Col>
            <Form.Label className="student__label">Professor</Form.Label>
                <p className="student__text">{subject.teacherOfSubject}</p>
            </Col>
        </Row>
    </Container>
    )

export default Topic

