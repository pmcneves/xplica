import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const useStudentsInfo = (
    namee='',
    agee='',
    gradee='',
    contactt='',
    locationn='',
    schooll='',
    guardiann='',
    kinshipp='',
    guardianContactt='',
    subjectt='',
    teacherOfSubjectt='',
) => {

    const [name, setName] = useState(namee)
    const [age, setAge] = useState(agee)
    const [grade, setGrade] = useState(gradee)
    const [contact, setContact] = useState(contactt)
    const [location, setLocation] = useState(locationn)
    const [school, setSchool] = useState(schooll)
    const [guardian, setGuardian] = useState(guardiann)
    const [kinship, setKinship] = useState(kinshipp)
    const [guardianContact, setGuardianContact] = useState(guardianContactt)
    const [subject, setSubject] = useState(subjectt)
    const [teacherOfSubject, setTeacherOfSubject] = useState(teacherOfSubjectt)

    // const explicandos = useSelector(state => state.explicandos)

    // useEffect(() => {
    //     setName(namee)
    //     setAge(agee)
    //     setGrade(gradee)
    //     setContact(contactt)
    //     setLocation(locationn)
    //     setSchool(schooll)
    //     setGuardian(guardiann)
    //     setKinship(kinshipp)
    //     setGuardianContact(guardianContactt)
    //     setSubject(subjectt)
    //     setTeacherOfSubject(teacherOfSubjectt)
    // }, [namee, agee, gradee, contactt, locationn, schooll, guardiann, kinshipp, guardianContactt, subjectt, teacherOfSubjectt])

    return {
        name,
        age,
        grade,
        contact,
        location,
        school,
        guardian,
        kinship,
        guardianContact,
        subject,
        teacherOfSubject,
        setName,
        setAge,
        setGrade,
        setContact,
        setLocation,
        setSchool,
        setGuardian,
        setKinship,
        setGuardianContact,
        setSubject,
        setTeacherOfSubject,
    }
}

export default useStudentsInfo
