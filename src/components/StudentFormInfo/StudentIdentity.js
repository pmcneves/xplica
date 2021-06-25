import { ageOptions, gradesArr } from "../../screens/Explicador/utils"

const StudentIdentity = ({register}) => (
    <div>
        <div className="row">
            <div className="col-md-3">
                <label className="form-label" htmlFor="firstName">Nome Próprio</label>
                <input 
                    className="form-control"
                    placeholder="Nome"
                    {...register("student.name.firstName")} />
            </div>
            <div className="col-md-3">
                <label className="form-label" htmlFor="lastName">Apelido</label>
                <input 
                    className="form-control"
                    placeholder="Apelido"
                    {...register("student.name.lastName")} />
            </div>
            <div className="col-md-3">
                <label className="form-label" htmlFor="age">Idade</label>
                <select 
                    className="form-select"
                    {...register("student.age")}>
                        {ageOptions.map(age => <option key={age} value={age}>{age}</option>)}
                </select>
            </div>
            <div className="col-md-3">
                <label className="form-label" htmlFor="grade">Ano</label>
                <select 
                    className="form-select"
                    {...register("student.grade")}>
                        {gradesArr.map(grade => <option key={grade} value={grade}>{grade}</option>)}
                </select>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3">
                <label className="form-label" htmlFor="location">Concelho (Habitação)</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Concelho"
                    {...register("student.location")}/>
            </div>
            <div className="col-md-3">
                <label className="form-label" htmlFor="contact">Telemóvel</label>
                <input
                    type="text"  
                    className="form-control" 
                    placeholder="Contacto"
                    {...register("student.contact")}/>
            </div>
            <div className="col-md-3">
                <label className="form-label" htmlFor="email">E-mail</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="E-mail"
                    {...register("student.email")}/>
            </div>
            <div className="col-md-3">
                <label className="form-label" htmlFor="school">Escola</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Escola"
                    {...register("student.school")}/>
            </div>
        </div>
    </div>       
)


export default StudentIdentity
