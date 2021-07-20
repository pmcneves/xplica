import "react-datepicker/dist/react-datepicker.css"
import { Modal, Button, Row, Col, Form } from "react-bootstrap"
import DatePicker, { registerLocale } from "react-datepicker"
import { useForm, Controller } from "react-hook-form"
import { useState, useEffect } from "react"
import pt from 'date-fns/locale/pt'
import moment from 'moment'

const GradesModal = ({
    isModalOpen, 
    handleModalClose, 
    studentData, 
    addNewAssessment,
    defaultAssessmentGrade,
    defaultAssessmentGradeType,
    defaultDate,
    defaultSubject,
    defaultType,
}) => {
   
    const { register, handleSubmit, control, reset } = useForm();
    
    useEffect(async () => {
        const defaults = {
            assessmentGrade: defaultAssessmentGrade,
            assessmentGradeType: defaultAssessmentGradeType,
            date: defaultDate,
            subject: defaultSubject,
            type: defaultType
        }
        reset(defaults)
    }, [
        reset, 
        defaultAssessmentGrade, 
        defaultDate, 
        defaultSubject, 
        defaultType,
        defaultAssessmentGradeType
    ])


    registerLocale('pt', pt)
 
    return (
        <Modal 
            show={isModalOpen}
            onHide={handleModalClose}
            centered
            animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Adicionar avaliação</Modal.Title>
                </Modal.Header>
                    <form onSubmit={handleSubmit(addNewAssessment)}>
                        <Modal.Body>
                            <Row className="mb-3">
                                <Col xs={4}>
                                    <label className="assessment__label  align-middle">Disciplina</label>
                                </Col>
                                <Col>
                                    <select
                                        className="form-select"
                                        {...register(`subject`)}>
                                            {studentData.tutoring.subjects.map((subjectToAccess, i)=> <option key={i}>{subjectToAccess.subject}</option>)}
                                    </select>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col xs={4}>
                                    <label className="assessment__label align-middle">Data</label>
                                </Col>
                                <Col>
                                    <Controller
                                        control={control}
                                        name={`date`}
                                        rules={{required: true}}
                                        render = {({field}) => {
                                            const date = moment(field.value)
                                            console.log(moment(field.value))
                                            return (
                                                <div className="customDatePickerWidth">
                                                    <DatePicker
                                                        className="form-control"
                                                        placeholderText = 'Data'
                                                        // dateFormat='dd/MM/yyyy'
                                                        isClearable
                                                        locale="pt" 
                                                        selected={Date.parse(field.value)}
                                                        onChange={e => field.onChange(e) } 
                                                    />
                                                </div>
                                            )
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col xs={4}>
                                    <label className="assessment__label">Tipo</label>
                                </Col>
                                <Col>
                                    <select
                                        className="form-select"
                                        {...register(`type`)}>
                                            <option value="QA">Questão-Aula</option>
                                            <option value="Teste">Teste</option>
                                    </select>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={4}>
                                    <label className="assessment__label">Nota</label>
                                </Col>
                                <Col xs={4}>
                                    <input
                                        className="form-control" 
                                        type="text"
                                        {...register(`assessmentGrade`)} />
                                </Col>
                                <Col xs={4}>
                                    <select
                                        className="form-select"
                                        {...register(`assessmentGradeType`)}>
                                            <option value=""> </option>
                                            <option value="%">%</option>
                                            <option value="val">val</option>
                                    </select>
                                </Col>
                            </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleModalClose}>
                            Fechar
                        </Button>
                        <Button variant="primary" type="submit">
                            Adicionar
                        </Button>
                    </Modal.Footer>
                </form>
        </Modal>
    )
}

export default GradesModal