import { Row } from "react-bootstrap"

const SubjectsInfo = ({register}) => {
    return (
        <Row>
            <div className="col-md-2">
                <label className="form-label" htmlFor="formOfPayment ">Pagamento</label>
                <select
                    className="form-select"
                    {...register("tutoring.formOfPayment")}>
                        <option>Mensal</option>
                        <option>Por hora</option>
                </select>
            </div>
            <div className="col-md-2">
                <label className="form-label" htmlFor="fee">Valor (€)</label>
                <input 
                    className="form-control"
                    placeholder="€"
                    {...register("tutoring.fee")} />
            </div>
        </Row>
    )
}

export default SubjectsInfo
