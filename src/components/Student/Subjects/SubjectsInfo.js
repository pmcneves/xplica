import { useContext, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { studentInfo } from "../../../screens/Student"
import SubjectNameMenu from "./SubjectNameMenu"
import Topic from "./Topic"

const SubjectsInfo = () => {
    const {subjects} = useContext(studentInfo).tutoring
    const topicsToShow = subjects.length

    //always shows the first subject, unless clicked on another
    const [topicName, setTopicName] = useState(subjects[0].subject)
    const [topicShown, setTopicShown] = useState(subjects[0])

    const subjectChange = topic => {
        setTopicName(topic.subject)
        setTopicShown(topic)
    }

    return (
        <Container className="text-center student__animation">
            <Row>
                <Col xs={12} md={2} style={{margin: 'auto 0'}}>
                    {topicsToShow === 1 ? (
                        <h4>{topicName}</h4> 
                     ) : (
                        <div>
                            <h6 className="student__subject__labels">
                                {subjects.map(topic => (
                                        <SubjectNameMenu 
                                            key={topic.subject} 
                                            classes={topic.subject === topicName && 'student__subject__label--active'}
                                            subject={topic.subject}
                                            fn={()=>subjectChange(topic)}/>
                                    ))}
                            </h6>
                        </div>
                     )}
                </Col>
                <Col>
                    <Topic subject={topicShown} />
                </Col>
            </Row>
        </Container>
    )
}

export default SubjectsInfo
