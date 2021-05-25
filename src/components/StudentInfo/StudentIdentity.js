import { ageOptions, grades } from "../../screens/Explicador/utils"

const StudentIdentity = ({register}) => (
    <div>
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
                    {...register("grade")}>
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
    </div>       
)


export default StudentIdentity
