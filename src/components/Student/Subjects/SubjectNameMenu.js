const SubjectNameMenu = ({subject, classes, fn}) => {
    return (
        <div className={`student__subject__label ${classes}`} onClick={fn}>
            {subject}
        </div>
    )
}

export default SubjectNameMenu
