import { Container, Row, Col } from "react-bootstrap"

const Topic = ({subject}) => (
    <Container>
        <Row>
            <Col className="mb-2">
                <label className="student__label">Regime</label>
                <p className="student__text">{subject.attendance}</p>
            </Col>
            <Col className="mb-2">
            <label className="student__label">Condições</label>
                <p className="student__text">{subject.conditions}</p>
            </Col>
        </Row>
        <Row>
            <Col className="mb-2">
                <label className="student__label">Horas/semana</label>
                <p className="student__text">{subject.durationPerWeek}</p>
            </Col>
            <Col className="mb-2">
            <label className="student__label">Professor</label>
                <p className="student__text">{subject.teacherOfSubject}</p>
            </Col>
        </Row>
    </Container>
    )

export default Topic

