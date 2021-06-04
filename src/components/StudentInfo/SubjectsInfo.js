import { Row } from "react-bootstrap"
import { durationPerWeek } from '../../screens/Explicador/utils'

const SubjectsInfo = ({register, id, removeSubject}) => {
    return (
        <div>
            <Row>
                <div className="col-md-3">
                    <label htmlFor="attendance ">Regime</label>
                    <select
                        className="form-select"
                        {...register("tutoring.attendance")}>
                            <option>Presencial</option>
                            <option>Online</option>
                            <option>Misto</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label htmlFor="conditions ">Condições</label>
                    <select
                        className="form-select"
                        {...register("tutoring.conditions")}>
                            <option>Individual</option>
                            <option>Grupo</option>
                            <option>Misto</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="durationPerWeek ">Horas por semana</label>
                    <select
                        className="form-select"
                        {...register("tutoring.durationPerWeek")}>
                            {durationPerWeek.map(hour => <option key={hour}>{hour}</option>)}
                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="formOfPayment ">Pagamento</label>
                    <select
                        className="form-select"
                        {...register("tutoring.formOfPayment")}>
                            <option>Mensal</option>
                            <option>Por hora</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="fee">Valor (€)</label>
                    <input 
                        className="form-control"
                        placeholder="€"
                        {...register("student.fee")} />
                </div>
            </Row>
        </div>
    )
}

export default SubjectsInfo
