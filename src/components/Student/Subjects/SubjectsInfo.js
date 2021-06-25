import { useContext, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { studentInfo } from "../../../screens/Student"
import SubjectNameMenu from "./SubjectNameMenu"
import Topic from "./Topic"

const SubjectsInfo = () => {
    const {subjects} = useContext(studentInfo).tutoring
    const [topicsToShow, setTopicsToShow] = useState(subjects.length)

    //always shows the first subject, unless clicked on another
    const [topicName, setTopicName] = useState(subjects[0].subject)
    const [topicShown, setTopicShown] = useState(subjects[0])

    const subjectChange = topic => {
        setTopicName(topic.subject)
        setTopicShown(topic)
    }



    console.log(topicShown)

    return (
        <Container className="text-center student__animation">
            <Row>
                <Col xs={12} md={3} styles={{margin: 'auto 0'}}>
                    {topicsToShow === 1 ? (
                        <h3>{topicName}</h3> 
                     ) : (
                        <div>
                            <h5 className="student__subject__labels">
                                {subjects.map(topic => (
                                        <SubjectNameMenu 
                                            key={topic.subject} 
                                            classes={topic.subject === topicName && 'student__subject__label--active'}
                                            subject={topic.subject}
                                            fn={()=>subjectChange(topic)}/>
                                    ))}
                            </h5>
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


/*           
{subjectsLength && (
    <div>
        <Row>
            <Col>
                <h2>{tutoring.subjects[0].subject}</h2>
            </Col>
        </Row> 
        <Row>
            <Topic/>
        </Row>
    </div>)}
{!subjectsLength && (
    <Row>
        <Col sm={12} md={3} className="student__subject__labels">
            { tutoring.subjects.map( topic => <SubjectNameMenu key={topic.subject} subject={topic.subject} setSubject={setSubject}/> )}
        </Col>
        <Col>
            { tutoring.subjects.map( topic => <Topic key={topic.subject} subject={topic} /> )}
        </Col>
    </Row>
    )} 
*/