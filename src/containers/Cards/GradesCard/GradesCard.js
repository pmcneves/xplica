import { useContext } from "react"
import { studentInfo } from "../../../screens/Student"

const GradesCard = () => {
    const info = useContext(studentInfo)
    return (
            <div className="student__name text-center mb-3">
                Notas
            </div>
    )
}

export default GradesCard
