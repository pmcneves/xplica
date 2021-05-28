import { faTimes } from "@fortawesome/free-solid-svg-icons"
import FontAwesomeIcons from "../Buttons/FontAwesomeIcons"

const SubjectsInfo = ({register, id, removeSubject}) => {
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <label htmlFor="subject">Disciplina</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Disciplina"
                        {...register(`subjects.${id}.subject`, { required: true })}/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="teacherOfSubject">Professor(a)</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Nome"
                        {...register(`subjects.${id}.teacherOfSubject`)}/>
                </div>
                <div className="col-md-1 deletesubject">
                    <FontAwesomeIcons icon={faTimes} fn={()=>removeSubject(id)} variant={"danger"}/>
                </div>
            </div>
        </div>
    )
}

export default SubjectsInfo
