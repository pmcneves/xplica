import SubmitButton from "../../components/Buttons/SubmitButton";
import StudentIdentity from '../../components/StudentInfo/StudentIdentity'
import GuardianInfo from "../../components/StudentInfo/GuardianInfo";
import SubjectsInfo from "../../components/StudentInfo/SubjectsInfo";



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
    submitForm
    }) => {

    return (
        <div className="container">
            <form onSubmit={submitForm}>
                <StudentIdentity 
                    name={name}
                    setName={setName}
                    age={age}
                    setAge={setAge}
                    grade={grade}
                    setGrade={setGrade}
                    contact={contact}
                    setContact={setContact}
                    location={location}
                    setLocation={setLocation}
                    school={school}
                    setSchool={setSchool}/>
                <GuardianInfo 
                    guardian={guardian}
                    setGuardian={setGuardian}
                    kinship={kinship}
                    setKinship={setKinship}
                    guardianContact={guardianContact}
                    setGuardianContact={setGuardianContact}
                />
                <SubjectsInfo 
                    subject={subject}
                    setSubject={setSubject}
                    teacherOfSubject={teacherOfSubject}
                    setTeacherOfSubject={setTeacherOfSubject}/>
                <SubmitButton>Adicionar</SubmitButton> 
            </form>
        </div>

    )
}

export default StudentForm
