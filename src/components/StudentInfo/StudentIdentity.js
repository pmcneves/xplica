import { ageOptions, grades } from "../../screens/Explicador/utils"

const StudentIdentity = ({
    name,
    age,
    grade,
    contact,
    location,
    school,
    setName,
    setAge,
    setGrade,
    setContact,
    setLocation,
    setSchool
    }) => {

    return (
        <div>
            <h4>Aluno</h4>
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="name">Nome</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Nome"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="age">Idade</label>
                    <select className="form-select" aria-label="age" onChange={e=>setAge(e.target.value)}>
                        {ageOptions.map(age => <option key={age} value={age}>{age}</option>)}
                    </select>
                </div>
                <div className="col-md-3">
                    <label htmlFor="grade">Ano</label>
                    <select className="form-select" aria-label="gradeSelect" onChange={e=>setGrade(e.target.value)}>
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
                        id="contact" 
                        placeholder="Contacto"
                        value={contact}
                        onChange={e=>setContact(e.target.value)}
                        />
                </div>
                <div className="col-md-3">
                    <label htmlFor="concelho">Concelho (Habitação)</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="concelho" 
                        placeholder="Concelho"
                        value={location}
                        onChange={e=>setLocation(e.target.value)}
                        />
                </div>
                <div className="col-md-6">
                    <label htmlFor="escola">Escola</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="escola" 
                        placeholder="Escola"
                        value={school}
                        onChange={e=>setSchool(e.target.value)}
                        />
                </div>
            </div>
        </div>        
    )
}

export default StudentIdentity
