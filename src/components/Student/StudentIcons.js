import { faBook, faUserAlt, faUserFriends } from "@fortawesome/free-solid-svg-icons"
import Icon from "./Icon"

const StudentIcons = ({setDivToShow, divToShow}) => {

    const icons = [faUserAlt, faUserFriends, faBook]
    let iconDivs = []
    for (let i = 1; i < 4; i++) {
        iconDivs.push(
            <div key={i} className="student__icon__wrapper">
                <Icon icon={icons[i-1]} classes={divToShow === i && 'student__icon--active'} fn={()=>setDivToShow(i)}/>
            </div>
        )
    }

    return (
        <div className="student__icons__wrapper d-flex mb-3">
            {iconDivs}
        </div>
    )
}

export default StudentIcons
