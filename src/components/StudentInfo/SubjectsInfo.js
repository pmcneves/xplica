const SubjectsInfo = ({
    subject,
    setSubject,
    teacherOfSubject,
    setTeacherOfSubject
}) => {

    return (
        <div>
            <h4>Explicações</h4>
            <div className="row">
                <div className="col-md-3">
                    <label htmlFor="subject">Disciplina</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="subject" 
                        placeholder="Disciplina"
                        value={subject}
                        onChange={e=>setSubject(e.target.value)}/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="teacher">Professor(a)</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="teacher" 
                        placeholder="Nome"
                        value={teacherOfSubject}
                        onChange={e=>setTeacherOfSubject(e.target.value)}/>
                </div>                    
            </div>
        </div>
    )
}

export default SubjectsInfo
