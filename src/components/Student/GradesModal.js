import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap"
import DatePicker, { registerLocale } from "react-datepicker";
import { useForm, Controller } from "react-hook-form";
import pt from 'date-fns/locale/pt';


const GradesModal = ({isModalOpen, handleModalClose, subjects}) => {

    const { register, handleSubmit, control } = useForm();
    registerLocale('pt', pt)

    console.log (subjects)
    

    // useEffect(()=> {
    //     if(date !== null)
    //         setFormattedDate(date.toLocaleString().split(',')[0])
    // }, [date])


    const handleAddAssessment = data => {
        console.log(data)
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
                <form onSubmit={handleSubmit(handleAddAssessment)}>
                    <Modal.Body>
                        <select
                            className="form-select"
                            {...register(`assessment.1.subject`)}>
                                {subjects.map((subjectToAccess, i)=> <option key={i}>{subjectToAccess.subject}</option>)}
                        </select>
                        <Controller
                            control={control}
                            name="assessment.1.date"
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
                            {...register(`assessment.1.type`)}>
                                <option>Questão-Aula</option>
                                <option>Teste</option>
                        </select>
                        <input 
                           type="text"
                           {...register(`assessment.1.assessmentGrade`)} />
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