const GuardianInfo = ({register}) => (
    <div>
        <h4>
            Encarregado de Educação
            <small className="text-muted"> (se aplicável)</small>
        </h4>
        <div className="row">
            <div className="col-md-3">
                <label htmlFor="guardianFirstName">Nome</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Nome"
                    {...register("guardianFirstName")}/>
            </div>
            <div className="col-md-3">
                <label htmlFor="guardianLastName">Apelido</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Apelido"
                    {...register("guardianLastName")}/>
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
                <label htmlFor="guardianContact">Telemóvel</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Contacto"
                    {...register("guardianContact")}/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3">
                <label htmlFor="guardianEmail">E-mail</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="E-mail"
                    {...register("guardianEmail")}/>
            </div>
            <div className="col-md-9">
                <label htmlFor="guardianObservations">Observações</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Observações"
                    {...register("guardianObservations")}/>
            </div>
        </div>
    </div>
)

export default GuardianInfo
