import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap"
import DatePicker, { registerLocale } from "react-datepicker";
import { useForm, Controller } from "react-hook-form";
import pt from 'date-fns/locale/pt';
import { newStudentAssessment } from "../../screens/Student/actions";
import { useDispatch, useSelector } from 'react-redux'
import { addNewAssessment } from "../../firebase"

const GradesModal = ({isModalOpen, handleModalClose, studentData, assessmentNumber}) => {

    const currentStudentId = useSelector(state=>state.studentInfo.studentId)
    const dispatch = useDispatch()
    const [assessmentGradeType, setAssessmentGradeType] = useState('%')
    const { register, handleSubmit, control } = useForm();
    registerLocale('pt', pt)

    // console.log(assessmentNumber)

    const addNewAssessments = data => {
        const transformedData = {
            currentStudentId,
            assessmentInfo: {
                ...data,
                date: data.date.toLocaleString().split(',')[0]
            }
        }
            console.log(transformedData)


        addNewAssessment(transformedData)
    }
 
    return (
        <Modal 
            show={isModalOpen}
            onHide={handleModalClose}
            centered
            animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Avaliações</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit(addNewAssessments)}>
                    <Modal.Body>
                        <select
                            className="form-select"
                            {...register(`subject`)}>
                                {studentData.tutoring.subjects.map((subjectToAccess, i)=> <option key={i}>{subjectToAccess.subject}</option>)}
                        </select>
                        <Controller
                            control={control}
                            name={`date`}
                            render = {({field}) => {
                                return (
                                    <DatePicker
                                        placeholderText = 'Data'
                                        dateFormat='dd/MM/yyyy'
                                        isClearable
                                        locale="pt" 
                                        selected={field.value}
                                        onChange={e => field.onChange(e) } 
                                    />
                                )
                            }}
                        />
                        <select
                            className="form-select"
                            {...register(`type`)}>
                                <option>Questão-Aula</option>
                                <option>Teste</option>
                        </select>
                        <input 
                           type="text"
                           {...register(`assessmentGrade`)} />
                        <select
                            className="form-select"
                            value={assessmentGradeType}
                            onChange={e=>setAssessmentGradeType(e.target.value)}>
                                <option value="%">%</option>
                                <option value="val">val</option>
                        </select>
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

/**
 * <DatePicker
                                    {...field}
                                    placeholderText = 'Data'
                                    dateFormat='dd/MM/yyyy'
                                    isClearable={true}
                                    locale="pt" 
                                    selected={date}
                                    onChange={date => setDate(date)} 
                                />
 */