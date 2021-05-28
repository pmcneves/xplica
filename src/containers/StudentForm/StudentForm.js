import SubmitButton from "../../components/Buttons/SubmitButton";
import { useForm } from "react-hook-form";
import StudentIdentity from "../../components/StudentInfo/StudentIdentity";
import GuardianInfo from "../../components/StudentInfo/GuardianInfo";
import SubjectsInfo from "../../components/StudentInfo/SubjectsInfo";
import { useState } from "react";



const StudentForm = ({addEntry}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [subjectCount, setSubjectCount] = useState([0])

    const addSubject = () => {
        const lastItem = subjectCount[subjectCount.length - 1]
        const newItem = lastItem + 1
        setSubjectCount(prevArray => [...prevArray, newItem])
    }

    const removeSubject = (id) => {
        const removeSubject = subjectCount.filter(subjectId => subjectId !== id)
        setSubjectCount(removeSubject)
    }

    return (
        <form onSubmit={handleSubmit(addEntry)}>
            <StudentIdentity register={register}/>
            <GuardianInfo register={register}/>
            <h4>Explicações</h4>
            {subjectCount.map(value => <SubjectsInfo register={register} key={value} id={value} removeSubject={removeSubject}/>)}
            <button type="button" onClick={()=>addSubject()}>add</button>
            <SubmitButton>Adicionar</SubmitButton> 
        </form>

    )
}

export default StudentForm
