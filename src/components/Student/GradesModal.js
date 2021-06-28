import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap"
import DatePicker, { registerLocale } from "react-datepicker";
import { useContext } from 'react'
import {studentInfo} from '../../screens/Student'
import { useForm, Controller } from "react-hook-form";
import pt from 'date-fns/locale/pt';
import "react-datepicker/dist/react-datepicker.css";
import SubmitButton from "../Buttons/SubmitButton";


const GradesModal = ({isModalOpen, handleModalClose}) => {

    const { register, handleSubmit, unregister, control } = useForm();
    const [date, setDate] = useState(null)
    const [formattedDate, setFormattedDate] = useState()
    // const {subjects} = useContext(studentInfo).tutoring
    // console.log(subjects.find(subject => subject.attendance))
    registerLocale('pt', pt)


    useEffect(()=> {
        if(date !== null)
            setFormattedDate(date.toLocaleString().split(',')[0])
    }, [date])


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
                <Modal.Body>
                    <form onSubmit={handleSubmit(handleAddAssessment)}>
                        <Controller
                            render = {({field}) => {
                                console.log(field.value)
                                return (
                                <DatePicker
                                    placeholderText = 'Data'
                                    dateFormat='dd/MM/yyyy'
                                    isClearable
                                    locale="pt" 
                                    selected={field.value}
                                    onChange={(e) => field.onChange(e)} 
                                />
                            )}}
                            control={control}
                            name="assessment"
                        />
                        <button type="submit">submit</button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Fechar
                    </Button>
                    <SubmitButton>
                        Adicionar
                    </SubmitButton>
                </Modal.Footer>
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