const GuardianInfo = ({
    guardian,
    setGuardian,
    kinship,
    setKinship,
    guardianContact,
    setGuardianContact
}) => {
    return (
        <div>
            <h4>
                Encarregado de Educação
                <small className="text-muted">(se aplicável)</small>
            </h4>
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="name">Nome</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Nome"
                        value={guardian}
                        onChange={e=>setGuardian(e.target.value)}/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="kinship">Grau de parentesco</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="kinship" 
                        placeholder="Grau"
                        value={kinship}
                        onChange={e=>setKinship(e.target.value)}/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="contact">Contacto</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="contact" 
                        placeholder="Contacto"
                        value={guardianContact}
                        onChange={e=>setGuardianContact(e.target.value)}/>
                </div>
            </div>
        </div>
    )
}

export default GuardianInfo
