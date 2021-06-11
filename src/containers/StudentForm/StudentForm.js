import SubmitButton from "../../components/Buttons/SubmitButton";
import { useForm } from "react-hook-form";
import StudentIdentity from "../../components/StudentInfo/StudentIdentity";
import GuardianInfo from "../../components/StudentInfo/GuardianInfo";
import SubjectsInfo from "../../components/StudentInfo/SubjectsInfo";
import { useState } from "react";
import Title from "../../components/StudentInfo/Title";
import Subjects from "../../components/StudentInfo/Subjects";
import { Row } from "react-bootstrap";


const StudentForm = ({addEntry}) => {
    const { register, handleSubmit, unregister } = useForm();
    const [subjectCount, setSubjectCount] = useState([0])

    
    //add and remove subjects
    const addSubject = () => {
        const lastItem = subjectCount[subjectCount.length - 1]
        const newItem = lastItem + 1
        setSubjectCount(prevArray => [...prevArray, newItem])
    }

    const removeSubject = (id) => {
        const removeSubject = subjectCount.filter(subjectId => subjectId !== id)
        setSubjectCount(removeSubject)
        unregister(`subjects.${id}`)
    }

    return (
        <form onSubmit={handleSubmit(addEntry)}>
            <Row>
                <div className="d-flex justify-content-between">
                    <Title>Dados do Aluno</Title>
                    <SubmitButton>Adicionar</SubmitButton> 
                </div>
            </Row>
            <StudentIdentity register={register}/>
            <GuardianInfo register={register}/>
            <Title>Explicações</Title>
            <SubjectsInfo register={register}/>
            {subjectCount.map(value => <Subjects register={register} key={value} id={value} removeSubject={removeSubject}/>)}
            <button type="button" className="btn" onClick={()=>addSubject()}>Mais disciplinas</button>
        </form>

    )
}

export default StudentForm
