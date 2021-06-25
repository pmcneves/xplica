import { Row, Col, Form } from "react-bootstrap"
import FontAwesomeIcons from "../Buttons/FontAwesomeIcons"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { durationPerWeek } from "../../screens/Explicador/utils"

const Subjects = ({register, id, removeSubject}) => {
    return (
        <Row>
            <Col md={2}>
                <Form.Label className="form-label" htmlFor="subject">Disciplina</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Disciplina"
                        {...register(`tutoring.subjects.${id}.subject`, { required: true })}/>
            </Col>
            <Col md={2}>
                <Form.Label className="form-label" htmlFor="teacherOfSubject">Professor(a)</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Nome"
                        {...register(`tutoring.subjects.${id}.teacherOfSubject`)}/>
            </Col>
            <Col md={2}>
                <Form.Label className="form-label" htmlFor="attendance">Regime</Form.Label>
                    <select
                        className="form-select"
                        {...register(`tutoring.subjects.${id}.attendance`)}>
                            <option>Presencial</option>
                            <option>Online</option>
                            <option>Misto</option>
                    </select>
            </Col>
            <Col md={2}>
                <Form.Label className="form-label" htmlFor="conditions ">Condições</Form.Label>
                    <select
                        className="form-select"
                        {...register(`tutoring.subjects.${id}.conditions`)}>
                            <option>Individual</option>
                            <option>Grupo</option>
                            <option>Misto</option>
                    </select>
            </Col>
            <Col md={3}>
                <Form.Label className="form-label" htmlFor="durationPerWeek ">Horas/semana</Form.Label>
                    <select
                        className="form-select"
                        {...register(`tutoring.subjects.${id}.durationPerWeek`)}>
                            {durationPerWeek.map(hour => <option key={hour}>{hour}</option>)}
                    </select>
            </Col>
            {id !== 0 && (
                <Col md={1} className="deletesubject">
                    <FontAwesomeIcons icon={faTimes} fn={()=>removeSubject(id)} variant={"danger"}/>
                </Col>
            )}
        </Row>
    )
}

export default Subjects
