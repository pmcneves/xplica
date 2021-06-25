import Title from "./Title"

const GuardianInfo = ({register}) => (
    <div>
        <Title>
            Encarregado de Educação
            <small className="text-muted"> (se aplicável)</small>
        </Title>
        <div className="row">
            <div className="col-md-3">
                <label className="form-label" htmlFor="guardianFirstName">Nome</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Nome"
                    {...register("guardian.name.guardianFirstName")}/>
            </div>
            <div className="col-md-3">
                <label className="form-label" htmlFor="guardianLastName">Apelido</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Apelido"
                    {...register("guardian.name.guardianLastName")}/>
            </div>
            <div className="col-md-3">
                <label className="form-label" htmlFor="kinship">Grau de parentesco</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Grau"
                    {...register("guardian.kinship")}/>
            </div>
            <div className="col-md-3">
                <label className="form-label" htmlFor="guardianContact">Telemóvel</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Contacto"
                    {...register("guardian.guardianContact")}/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3">
                <label className="form-label" htmlFor="guardianEmail">E-mail</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="E-mail"
                    {...register("guardian.guardianEmail")}/>
            </div>
            <div className="col-md-9">
                <label className="form-label" htmlFor="guardianObservations">Observações</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Observações"
                    {...register("guardian.guardianObservations")}/>
            </div>
        </div>
    </div>
)

export default GuardianInfo
