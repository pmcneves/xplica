import { Row, Col, Form } from "react-bootstrap"
import FontAwesomeIcons from "../Buttons/FontAwesomeIcons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusCircle, faTimes } from "@fortawesome/free-solid-svg-icons"
import { durationPerWeek } from "../../screens/Explicador/utils"
import { useEffect, useState } from "react"

const Subjects = ({ register, id, removeSubject, addSubject, subjectCount }) => {

    const [subject, setSubject] = useState('')
    const [value, setValue] = useState('')


    return (
        <Row>
            <Col md={2}>
                <Form.Label className="form-label" htmlFor="subject">Disciplina</Form.Label>
                <input
                    className="form-control"
                    type="text" 
                    placeholder="Disciplina"
                    {...register(`tutoring.subjects.${id}.subject`)}
                    />
                    
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
            <Col md={2}>
                <Form.Label className="form-label" htmlFor="durationPerWeek ">Horas/semana</Form.Label>
                    <select
                        className="form-select"
                        {...register(`tutoring.subjects.${id}.durationPerWeek`)}>
                            {durationPerWeek.map(hour => <option key={hour}>{hour}</option>)}
                    </select>
            </Col>
            <Col md={1} className="position-relative">
                <div className="d-flex position-absolute bottom-0">
                    {subjectCount[subjectCount.length - 1] === id && (
                        <button type="button" className="addSubjectBtn border-0" onClick={()=>addSubject()}>
                            <FontAwesomeIcon icon={faPlusCircle}/>
                        </button>
                    )}
                    <button className="border-0" onClick={()=>removeSubject(id)}><FontAwesomeIcon icon={faTimes}/></button>
                </div>
            </Col>    
        </Row>
    )
}

export default Subjects


/**
 * <Row>
            <Col md={2}>
                <Form.Label className="form-label" htmlFor="subject">Disciplina</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Disciplina"

                    {...register(`tutoring.subject`, { required: true })}/>
            </Col>
            <Col md={2}>
                <Form.Label className="form-label" htmlFor="teacherOfSubject">Professor(a)</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Nome"
                        {...register(`tutoring.teacherOfSubject`)}/>
            </Col>
            <Col md={2}>
                <Form.Label className="form-label" htmlFor="attendance">Regime</Form.Label>
                    <select
                        className="form-select"
                        {...register(`tutoring.attendance`)}>
                            <option>Presencial</option>
                            <option>Online</option>
                            <option>Misto</option>
                    </select>
            </Col>
            <Col md={2}>
                <Form.Label className="form-label" htmlFor="conditions ">Condições</Form.Label>
                    <select
                        className="form-select"
                        {...register(`tutoring.conditions`)}>
                            <option>Individual</option>
                            <option>Grupo</option>
                            <option>Misto</option>
                    </select>
            </Col>
            <Col md={2}>
                <Form.Label className="form-label" htmlFor="durationPerWeek ">Horas/semana</Form.Label>
                    <select
                        className="form-select"
                        {...register(`tutoring.durationPerWeek`)}>
                            {durationPerWeek.map(hour => <option key={hour}>{hour}</option>)}
                    </select>
            </Col>
            <Col md={1} className="position-relative">
                <div className="d-flex position-absolute bottom-0">
                    {subjectCount[subjectCount.length - 1] === id && (
                        <button type="button" className="addSubjectBtn border-0" onClick={()=>addSubject()}>
                            <FontAwesomeIcon icon={faPlusCircle}/>
                        </button>
                    )}
                    <button className="border-0" onClick={()=>removeSubject(id)}><FontAwesomeIcon icon={faTimes}/></button>
                </div>
            </Col>    
        </Row>
 */