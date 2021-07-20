const SubjectNameMenu = ({subject, classes, fn}) => {
    return (
        <div className={`student__subject__label ${classes}`} onClick={fn}>
            <h6>
                {subject}
            </h6>
        </div>
    )
}

export default SubjectNameMenu
