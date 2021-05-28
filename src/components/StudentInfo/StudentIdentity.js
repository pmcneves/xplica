import { ageOptions, gradesArr } from "../../screens/Explicador/utils"

const StudentIdentity = ({register}) => (
    <div>
        <h4>Dados do Aluno</h4>
        <div className="row">
            <div className="col-md-3">
                <label htmlFor="firstName">Nome Próprio</label>
                <input 
                    className="form-control"
                    placeholder="Nome"
                    {...register("name.firstName")} />
            </div>
            <div className="col-md-3">
                <label htmlFor="lastName">Apelido</label>
                <input 
                    className="form-control"
                    placeholder="Apelido"
                    {...register("name.lastName")} />
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
                        {gradesArr.map(grade => <option key={grade} value={grade}>{grade}</option>)}
                </select>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3">
                <label htmlFor="contact">Telemóvel</label>
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
            <div className="col-md-3">
                <label htmlFor="email">E-mail</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="E-mail"
                    {...register("email")}/>
            </div>
            <div className="col-md-3">
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
