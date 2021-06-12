import './styles.scss'
import { useSelector } from 'react-redux'
import { Row } from 'react-bootstrap'

const Summary = () => {
    const students = useSelector(state => state.explicandos.students)

    // attendance counter
    let online = 0
    let presencial =0
    students.map(student => {
        if(student.info.tutoring.attendance === 'Online') {
            online += 1 
        } else {
            presencial += 1
        }
        return online && presencial
    })

    return (
        <Row  className="summary-layout__container">
            <div className="col-md-4 summary-layout">
                <h2 className="summary-layout__title">Número de alunos</h2>
                <h4 className="summary-layout__number">{students.length > 0 ? students.length : '-'}</h4>
            </div>
            <div className="col-md-4 summary-layout">
                <h2 className="summary-layout__title">Horas semanais</h2>
                <h4 className="summary-layout__number">{students.length > 0 ? `${students.length}h` : '-'}</h4>
            </div>
            <div className="col-md-4 summary-layout">
                <h2 className="summary-layout__title">Presencial / Online</h2>
                <h4 className="summary-layout__number">{students.length > 0 ? `${presencial} / ${online}` : '-'}</h4>
            </div>
        </Row>
    )
}

export default Summary
