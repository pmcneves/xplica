import { useContext, useState } from "react"
import GuardianInfo from "../../../components/Student/GuardianInfo"
import StudentIcons from "../../../components/Student/StudentIcons"
import StudentInfo from "../../../components/Student/StudentInfo"
import SubjectsInfo from "../../../components/Student/Subjects/SubjectsInfo"
import {studentInfo} from '../../../screens/Student'

const StudentCard = () => {
    const info = useContext(studentInfo)
    const [divToShow, setDivToShow] = useState(1)
    const {name} = info.student

    const getDiv = (divNumber) => {
        switch(divNumber) {
            case 1:
                return <StudentInfo />
            case 2:
                return <GuardianInfo />
            default:
                return <SubjectsInfo />
        }
    }

    return (
        <div>
            <div className="student__name mt-3 mb-2">
                {name}
            </div>
            <StudentIcons setDivToShow={setDivToShow} divToShow={divToShow}/>
            <div style={{minHeight:'300px'}}>
                {getDiv(divToShow)} 
            </div>
        </div>
    )
}

export default StudentCard
