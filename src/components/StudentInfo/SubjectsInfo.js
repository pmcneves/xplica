const SubjectsInfo = ({register}) => (
    <div>
        <h4>Explicações</h4>
        <div className="row">
            <div className="col-md-3">
                <label htmlFor="subject">Disciplina</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Disciplina"
                    {...register("subject")}/>
            </div>
            <div className="col-md-3">
                <label htmlFor="teacherOfSubject">Professor(a)</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Nome"
                    {...register("teacherOfSubject")}/>
            </div>                    
        </div>
    </div>
)


export default SubjectsInfo
