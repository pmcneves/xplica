import { Row } from "react-bootstrap"
import FontAwesomeIcons from "../Buttons/FontAwesomeIcons"
import { faTimes } from "@fortawesome/free-solid-svg-icons"


const Subjects = ({register, id, removeSubject}) => {
    return (
        <Row>
            <div className="col-md-3">
                <label htmlFor="subject">Disciplina</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Disciplina"
                    {...register(`tutoring.subjects.${id}.subject`, { required: true })}/>
            </div>
            <div className="col-md-3">
                <label htmlFor="teacherOfSubject">Professor(a)</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Nome"
                    {...register(`tutoring.subjects.${id}.teacherOfSubject`)}/>
            </div>
            <div className="col-md-1 deletesubject">
                <FontAwesomeIcons icon={faTimes} fn={()=>removeSubject(id)} variant={"danger"}/>
        </div>
    </Row>
    )
}

export default Subjects
