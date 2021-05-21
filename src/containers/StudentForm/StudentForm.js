import SubmitButton from "../../components/Buttons/SubmitButton";
// import StudentIdentity from '../../components/StudentInfo/StudentIdentity'
// import GuardianInfo from "../../components/StudentInfo/GuardianInfo";
// import SubjectsInfo from "../../components/StudentInfo/SubjectsInfo";
import { useForm } from "react-hook-form";
import { ageOptions, grades } from "../../screens/Explicador/utils";
import { useDispatch } from "react-redux";




const StudentForm = ({
    name,
    age,
    grade,
    contact,
    location,
    school,
    guardian,
    kinship,
    guardianContact,
    subject,
    teacherOfSubject,
    setName,
    setAge,
    setGrade,
    setContact,
    setLocation,
    setSchool,
    setGuardian,
    setKinship,
    setGuardianContact,
    setSubject,
    setTeacherOfSubject,
    // submitForm
    }) => {

    const dispatch = useDispatch()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const submitForm = data => {
        console.log(data)
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit(submitForm)}>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="name">Nome</label>
                        <input 
                        className="form-control"
                        placeholder="Nome"
                        {...register("name", { required: true })} />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="age">Idade</label>
                        <select 
                        className="form-select"
                        {...register("age")}>
                            {ageOptions.map(age => <option key={age} value={age}>{age}</option>)}
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="grade">Ano</label>
                        <select 
                            className="form-select"
                            {...register("gradeSelect")}>
                                {grades.map(grade => <option key={grade} value={grade}>{grade}</option>)}
                                <option>Universidade</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <label htmlFor="contact">Contacto</label>
                        <input
                            type="text"  
                            className="form-control" 
                            placeholder="Contacto"
                            {...register("contact")}/>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="location">Concelho (Habitação)</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Concelho"
                            {...register("location")}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="school">Escola</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Escola"
                            {...register("school")}/>
                    </div>
                </div>
                <div>
                    <h4>
                        Encarregado de Educação
                        <small className="text-muted">(se aplicável)</small>
                    </h4>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="guardianName">Nome</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Nome"
                                {...register("guardianName")}/>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="kinship">Grau de parentesco</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Grau"
                                {...register("kinship")}/>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="guardianContact">Contacto</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Contacto"
                                {...register("guardianContact")}/>
                        </div>
                    </div>
                </div>
                <div>
                    <h4>Explicações</h4>
                    <div className="row">
                        <div className="col-md-3">
                            <label htmlFor="subject">Disciplina</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Disciplina"
                                {...register("subject")}/>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="teacher">Professor(a)</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Nome"
                                {...register("teacher")}/>
                        </div>                    
                    </div>
                </div>
                <SubmitButton>Adicionar</SubmitButton> 
            </form>
        </div>

    )
}

export default StudentForm
