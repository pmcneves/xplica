import SubmitButton from "../../components/Buttons/SubmitButton";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addStudent } from "../../screens/Explicador/actions";
import { v4 as uuidv4 } from 'uuid'
import StudentIdentity from "../../components/StudentInfo/StudentIdentity";
import GuardianInfo from "../../components/StudentInfo/GuardianInfo";
import SubjectsInfo from "../../components/StudentInfo/SubjectsInfo";




const StudentForm = () => {

    const dispatch = useDispatch()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    //add entry study
    const addEntry = (data) => {
        dispatch(addStudent({
            id: uuidv4(),
            info: data
        }))
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit(addEntry)}>
                <StudentIdentity register={register}/>
                <GuardianInfo register={register}/>
                <SubjectsInfo register={register}/>
                <SubmitButton>Adicionar</SubmitButton> 
            </form>
        </div>

    )
}

export default StudentForm
