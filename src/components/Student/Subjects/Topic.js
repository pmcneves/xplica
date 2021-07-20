import { Container, Row, Col } from "react-bootstrap"
import { useMemo } from "react"
import { useTable } from 'react-table'
import TableButtons from "../../Buttons/TableButtons"
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons"


const Topic = ({
    selectedSubject, 
    assessments, 
    deleteAssessment, 
    handlerEditGradeModal,
    handleDeleteAssessmentModalOpen
}) => {


    const columns = useMemo(
        () => [
          {
            Header: 'Data',
            accessor: 'date',
            Cell: (({value}) => {
                const dateArr = value.split('/')
                dateArr.pop()
                return dateArr.toString().replace(',', '/');
            })
          },
          {
            Header: 'Tipo',
            accessor: 'type',
          },
          {
            Header: 'Nota',
            accessor: 'assessmentGrade',
          },
          {
            Header: '',
            accessor: 'actions',
            width: 75,
            Cell: ({row}) => {
                return (
                    <div>
                        <TableButtons icon={faEdit} fn={() => handlerEditGradeModal(row.original.id)}/>
                        <TableButtons icon={faTrashAlt} fn={() => handleDeleteAssessmentModalOpen(row.original.id)}/>
                    </div>)}
          },
        ],
        //eslint-disable-next-line react-hooks/exhaustive-deps
        []
    )     

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
            columns, 
            data: assessments ? assessments : [],
        }) 




    return (
        <Container>
            <div className="text-center">
                <Row>
                    <Col className="mb-2">
                        <label className="student__label">Regime</label>
                        <p className="student__text">{selectedSubject.attendance}</p>
                    </Col>
                    <Col className="mb-2">
                        <label className="student__label">Condições</label>
                        <p className="student__text">{selectedSubject.conditions}</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="mb-2">
                        <label className="student__label">h/sem.</label>
                        <p className="student__text">{selectedSubject.durationPerWeek}</p>
                    </Col>
                    <Col className="mb-2">
                        <label className="student__label">Professor</label>
                        <p className="student__text">{selectedSubject.teacherOfselectedSubject}</p>
                    </Col>
                </Row>
            </div>
            {assessments ? (
                <table {...getTableProps()} className="table table-hover table-striped mt-3">
                    <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()} >
                                        {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return (
                                            <td {...cell.getCellProps({
                                                style: {
                                                    width: cell.column.width,
                                                }
                                            })}>
                                                {cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            ) : (
                <div className="mt-3 mb-3 text-center">
                    Não existem avaliações inseridas.
                </div>
            )}
        </Container>
        )
    }

export default Topic

