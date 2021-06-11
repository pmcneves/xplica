import './styles.scss'
import { useSelector } from 'react-redux'
import { Row } from 'react-bootstrap'

const Summary = () => {
    const explicandos = useSelector(state => state.explicandos)

    // attendance counter
    let online = 0
    let presencial =0
    // explicandos.map(student => {
    //     if(student.info.tutoring.attendance === 'Online') {
    //         online += 1 
    //     } else {
    //         presencial += 1
    //     }
    //     return online && presencial
    // })

    return (
        <Row  className="summary-layout__container">
            <div className="col-md-4 summary-layout">
                <h2 className="summary-layout__title">Número de alunos</h2>
                <h4 className="summary-layout__number">{explicandos.length}</h4>
            </div>
            <div className="col-md-4 summary-layout">
                <h2 className="summary-layout__title">Horas semanais</h2>
                <h4 className="summary-layout__number">{explicandos.length}h</h4>
            </div>
            <div className="col-md-4 summary-layout">
                <h2 className="summary-layout__title">Presencial / Online</h2>
                <h4 className="summary-layout__number">{presencial} / {online}</h4>
            </div>
        </Row>
    )
}

export default Summary
