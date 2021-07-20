import { Row, Col, Form } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusCircle, faTimes } from "@fortawesome/free-solid-svg-icons"
import { durationPerWeek } from "../../screens/Explicador/utils"

const Subjects = ({ register, id, removeSubject, addSubject, subjectCount }) => {
    return (
        <div className="form__subjects">
            <Row className="form__subjects__rows">
                <Col md={2}>
                    <Form.Label htmlFor="subject">Disciplina</Form.Label>
                    <input
                        className="form-control"
                        type="text" 
                        placeholder="Disciplina"
                        {...register(`tutoring.subjects.${id}.subject`)}
                        />
                        
                </Col>
                <Col md={2}>
                    <Form.Label htmlFor="teacherOfSubject">Professor(a)</Form.Label>
                        <Form.Control
                            type="text" 
                            placeholder="Nome"
                            {...register(`tutoring.subjects.${id}.teacherOfSubject`)}/>
                </Col>
                <Col md={2}>
                    <Form.Label htmlFor="attendance">Regime</Form.Label>
                        <select
                            className="form-select"
                            {...register(`tutoring.subjects.${id}.attendance`)}>
                                <option>Presencial</option>
                                <option>Online</option>
                                <option>Misto</option>
                        </select>
                </Col>
                <Col md={2}>
                    <Form.Label htmlFor="conditions ">Condições</Form.Label>
                        <select
                            className="form-select"
                            {...register(`tutoring.subjects.${id}.conditions`)}>
                                <option>Individual</option>
                                <option>Grupo</option>
                                <option>Misto</option>
                        </select>
                </Col>
                <Col md={2}>
                    <Form.Label htmlFor="durationPerWeek ">Horas/semana</Form.Label>
                        <select
                            className="form-select"
                            {...register(`tutoring.subjects.${id}.durationPerWeek`)}>
                                {durationPerWeek.map(hour => <option key={hour}>{hour}</option>)}
                        </select>
                </Col>
                <Col md={1}>
                    <div className="d-flex justify-content-center mt-3">
                        {subjectCount[subjectCount.length - 1] === id && (
                            <button type="button" className="addSubjectBtn border-0" onClick={()=>addSubject()}>
                                <FontAwesomeIcon icon={faPlusCircle}/>
                            </button>
                        )}
                        <button className="border-0" onClick={()=>removeSubject(id)}><FontAwesomeIcon icon={faTimes}/></button>
                    </div>
                </Col>    
            </Row>
        </div>
    )
}

export default Subjects