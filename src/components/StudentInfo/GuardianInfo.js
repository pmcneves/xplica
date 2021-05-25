const GuardianInfo = ({register}) => (
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
)

export default GuardianInfo
