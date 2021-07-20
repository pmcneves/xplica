import { useContext } from "react"
import { studentInfo } from "../../../screens/Student"
import { Container, Row, Col, Button } from "react-bootstrap"
import { useState } from 'react'
import GradesModal from "../../../components/Student/GradesModal"
import { useDispatch, useSelector } from 'react-redux'
import { deleteStudentAssessment, newStudentAssessment } from "../../../screens/Student/actions"
import { v4 as uuidv4 } from 'uuid'
import SubjectNameMenu from "../../../components/Student/Subjects/SubjectNameMenu"
import Topic from "../../../components/Student/Subjects/Topic"
import DeleteAssessmentModal from "../../../components/Student/DeleteAssessmentModal"



const GradesCard = () => {
    const studentData = useContext(studentInfo)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isDeleteAssessmentModalOpen, setIsDeleteAssessmentModalOpen] = useState(false)
    const dispatch = useDispatch()
    const currentStudentId = useSelector(state=>state.studentInfo.studentId)


    /////////// STATES

    //id to remove on delete assessment
    const [idToRemove, setIdToRemove] = useState()

    //default state to populate modals data
    const [defaultAssessmentGrade, setDefaultAssessmentGrade] = useState('')
    const [defaultAssessmentGradeType, setDefaultAssessmentGradeType] = useState('')
    const [defaultDate, setDefaultDate] = useState()
    const [defaultSubject, setDefaultSubject] = useState('')
    const [defaultType, setDefaultType] = useState('')
    const [textForUpdate, setTextForUpdate] = useState(false)

    //always shows the first subject, unless clicked on another
    const [topicShown, setTopicShown] = useState(studentData.tutoring.subjects[0])
    // const [assessmentsShown, setAssessmentsShown] = useState([])
    // const [hasAssessments, setHasAssessments] = useState(false)

    //subject change
    const subjectChange = topic => {
        setTopicShown(topic)
    }

    // assessments per subject  --- NEEDS IMPROVEMENT
    // let assessmentsArr = []
    // useEffect(()=> {
    //     if(studentData.assessments){
    //         for (let i = 0; i<studentData.assessments.length; i++) {
    //             if(studentData.assessments[i].subject === topicShown.subject) {
    //                 assessmentsArr.push(studentData.assessments[i])
    //             } 
    //     }} 
    //     setAssessmentsShown(assessmentsArr)
    // }, [topicShown])




    /////////// MODALS

    //add grade modal handler
    const handleModalOpen = () => {
        setIsModalOpen(true)
    }

    const handleModalClose = () => {
        setIsModalOpen(false)
        resetDefaults()
    }

    // edit grade modal handler
    const handlerEditGradeModal = id => {
        handleModalOpen();
        let assessmentToUpdate
        studentData.assessments.map(assessment=> {
            if(assessment.id === id) assessmentToUpdate = assessment
        })
        setDefaultAssessmentGrade(assessmentToUpdate.assessmentGrade)
        setDefaultAssessmentGradeType(assessmentToUpdate.assessmentGradeType)
        setDefaultDate(assessmentToUpdate.date)
        setDefaultSubject(assessmentToUpdate.subject)
        setDefaultType(assessmentToUpdate.type)
        setTextForUpdate(true)      
    }

    // delete grade modal handler
    const handleDeleteAssessmentModalOpen = id => {
        setIsDeleteAssessmentModalOpen(true)
        setIdToRemove(id)
    }

    const handleDeleteAssessmentModalClose= () => {
        setIsDeleteAssessmentModalOpen(false)
        setIdToRemove()
    }



    //reset state
    const resetDefaults = () => {
        setDefaultAssessmentGrade('')
        setDefaultAssessmentGradeType('')
        setDefaultDate('')
        setDefaultSubject('')
        setDefaultType('')
        setTextForUpdate(false)   
    }





    /////////// MANAGE ASSESSMENTS

    //add assessment
    const addNewAssessment = data => {
        const options = {year:'numeric', month: '2-digit', day: '2-digit'}
        const transformedData = {
            assessmentId: uuidv4(),
            currentStudentId,
            assessmentInfo: {
                ...data,
                assessmentGrade: data.assessmentGrade + data.assessmentGradeType,
                date: data.date.toLocaleString('pt-PT', options)
            }
        }
        dispatch(newStudentAssessment(transformedData))
    }

    // edit assessment
    const editAssessment = () => {
        handleModalClose();
        console.log('updated')
    }

    //delete assessment
    const deleteAssessment =  id => {
        const ids = {
            currentStudentId,
            id,
        }
        dispatch(deleteStudentAssessment(ids))
        handleDeleteAssessmentModalClose()
    }

    return (
        <Container>
            <div className="student__name text-center">
                Explicações e Avaliações
            </div>
            <Row>
                <Col className="d-flex justify-content-center">
                    {studentData.tutoring.subjects.map(topic => (
                        <SubjectNameMenu 
                            key={topic.subject} 
                            classes={topic.subject === topicShown.subject && 'student__subject__label--active'}
                            subject={topic.subject}
                            fn={()=>subjectChange(topic)}
                        />
                    ))}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Topic 
                        selectedSubject={topicShown} 
                        assessments={studentData.assessments} 
                        deleteAssessment={deleteAssessment}
                        handlerEditGradeModal={handlerEditGradeModal}
                        handleDeleteAssessmentModalOpen={handleDeleteAssessmentModalOpen}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Container className="d-grid">
                        <Button 
                            variant="dark"
                            onClick={handleModalOpen}>
                                Adicionar avaliação
                        </Button>
                    </Container>
                </Col>
            </Row>
            <Row>                
            </Row>
            <GradesModal 
                isModalOpen={isModalOpen} 
                handleModalClose={handleModalClose} 
                studentData={studentData} 
                addNewAssessment={addNewAssessment}
                defaultAssessmentGrade={defaultAssessmentGrade}
                defaultAssessmentGradeType={defaultAssessmentGradeType}
                defaultDate={defaultDate}
                defaultSubject={defaultSubject}
                defaultType={defaultType}
                textForUpdate={textForUpdate}
                editAssessment={editAssessment}
            />
            <DeleteAssessmentModal 
                isDeleteAssessmentModalOpen={isDeleteAssessmentModalOpen} 
                handleDeleteAssessmentModalClose={handleDeleteAssessmentModalClose}
                deleteAssessment={deleteAssessment}
                idToRemove={idToRemove}
            />
        </Container>
    )
}

export default GradesCard
