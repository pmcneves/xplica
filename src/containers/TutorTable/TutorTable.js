import { useDispatch, useSelector } from "react-redux"
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import FontAwesomeIcons from "../../components/Buttons/FontAwesomeIcons"
import {removeStudentFromStore} from '../../screens/Explicador/actions'
import { Link } from "react-router-dom"

const TutorTable = () => {
    const explicandos = useSelector(state => state.explicandos)
    const dispatch = useDispatch()
    
    const removeStudent = (id) => {
        dispatch(removeStudentFromStore(id))
    }

    return (
        <div>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Idade</th>
                        <th scope="col">Escola</th>
                    </tr>
                </thead>
                <tbody>
                    {explicandos.map(aluno => (
                        <tr key={aluno.id}> 
                            <td>{aluno.info.name}</td>
                            <td className="align-middle">{aluno.info.age}</td>
                            <td className="align-middle">{aluno.info.schoolLocation}</td>
                            <td className="text-end">
                                <FontAwesomeIcons icon={faEdit} classes={"btn-primary"}/>
                                <FontAwesomeIcons icon={faTrashAlt} classes={"btn-danger"} fn={()=>removeStudent(aluno.id)}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TutorTable
