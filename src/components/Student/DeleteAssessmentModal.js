import { Modal, Button } from "react-bootstrap"

const DeleteAssessmentModal = ({
    isDeleteAssessmentModalOpen, 
    handleDeleteAssessmentModalClose,
    deleteAssessment,
    idToRemove,
}) => {

    return (
        <Modal
            show={isDeleteAssessmentModalOpen}
            onHide={handleDeleteAssessmentModalClose}
            centered
            animation={false}>
                <Modal.Header closeButton>
                    Remover avaliação
                </Modal.Header>
                <Modal.Body>
                    Tem a certeza que pretende remover esta avaliação?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleDeleteAssessmentModalClose}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={()=>deleteAssessment(idToRemove)}>
                        Remover
                    </Button>
                </Modal.Footer>
        </Modal>
    )
}

export default DeleteAssessmentModal
