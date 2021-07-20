import { useForm } from "react-hook-form";
import StudentIdentity from "../../components/StudentFormInfo/StudentIdentity";
import GuardianInfo from "../../components/StudentFormInfo/GuardianInfo";
import SubjectsInfo from "../../components/StudentFormInfo/SubjectsInfo";
import { useState, useEffect } from "react";
import Title from "../../components/StudentFormInfo/Title";
import Subjects from "../../components/StudentFormInfo/Subjects";
import { Button, Row } from "react-bootstrap";


const StudentForm = ({submitEntry}) => {
    const { register, handleSubmit, unregister, reset } = useForm();
    const [subjectCount, setSubjectCount] = useState([0])

    //populate fields for edit
    useEffect(async () => {

        reset()
    }, [
        reset,
    ])


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
        <form onSubmit={handleSubmit(submitEntry)}>
            <Row>
                <div className="d-flex justify-content-between">
                    <Title>Dados do Aluno</Title>
                </div>
            </Row>
            <StudentIdentity register={register}/>
            <GuardianInfo register={register}/>
            <Title>Explicações</Title>
            <SubjectsInfo register={register}/>
            {subjectCount.map(value => <Subjects 
                register={register} 
                key={value} 
                subjectCount={subjectCount} 
                id={value} 
                addSubject={addSubject} 
                removeSubject={removeSubject} />
            )}
            <div className="form__submitBtn">
                <Button variant="dark" type="submit">Adicionar alun@</Button>
            </div>
        </form>

    )
}

export default StudentForm
