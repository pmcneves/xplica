import './styles.scss'
import { useDispatch, useSelector } from "react-redux"
import { faEye, faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons"
import FontAwesomeIcons from "../../components/Buttons/FontAwesomeIcons"
import { removeStudent } from '../../screens/Explicador/actions'
import { useHistory } from "react-router-dom"
import { useEffect, useMemo, useState } from "react"
import { useTable } from 'react-table'
import { useSortBy } from 'react-table/dist/react-table.development'
import Loader from '../../components/Loader/Loader'
import NoStudents from '../../components/NoStudents/NoStudents'
import { useWindowSize } from '../../hooks/useWindowSize'
import TableButtons from '../../components/Buttons/TableButtons'
import { Button, Modal } from 'react-bootstrap'

const TutorTable = () => {
    const { students, loading } = useSelector(state => state.explicandos)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [idToRemove, setIdToRemove] = useState('')
    const width = useWindowSize();
    const dispatch = useDispatch()
    const history = useHistory();

    const columns = useMemo(
        () => [
          {
            Header: 'Nome',
            accessor: 'info.student.name',
          },
          {
            Header: 'Escola',
            accessor: 'info.student.school',
          },
          {
            Header: 'Ano',
            id: 'Ano',
            accessor: 'info.student.grade',
          },
          {
            Header: 'Disciplina(s)',
            accessor: d => d.info.tutoring.subjects.map((classes,i) => <p key={i}>{classes.subject}</p>),
          },
          {
            Header: 'Contacto',
            id:'Contacto',
            accessor: 'info.student.contact',
          },
          {
            Header: 'Regime',
            id:'Regime',
            accessor: d => d.info.tutoring.attendance,
          },
          {
            Header: '',
            accessor: 'actions',
            width: 150,
            Cell: ({row}) => {
                return (
                    <div>
                        <TableButtons icon={faEye} fn={(e) => pushStudentBtnClick(e, row.original.id)}/>
                        <TableButtons icon={faTrashAlt} fn={e=>openModal(e, row.original.id)}/>
                    </div>)}
          }
        ],
        []
    )      

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setHiddenColumns,
    } = useTable({
            columns, 
            data: students,
            initialState: {
                hiddenColumns: []
            }
        }, useSortBy)


    //hiding columns on width change
    useEffect(() => {
        const hiddenArr=['Disciplina(s)', 'Regime', 'Contacto', 'Ano']
        if(width<558)   
            setHiddenColumns(hiddenArr)
        else 
            setHiddenColumns([])
    }, [width])


    //modal
    const openModal = (e,id) => {
        e.stopPropagation();
        setIsModalOpen(true)
        setIdToRemove(id)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setIdToRemove()
    }

    const handleRemoveStudent = id => {
        dispatch(removeStudent(id))
        closeModal()
    }

    //pushing to student on row click
    const pushStudentRowClick = (id) => {
        history.push(`/alun@/${id}`)
    }

    //pushing to student on btn click
    const pushStudentBtnClick = (e, id) => {
        e.stopPropagation();
        history.push(`/alun@/${id}`)
    }

    //fetching data
    if (loading) 
        return <Loader/>

    return (
        <div>
            {students.length >= 1 ? (
                <table {...getTableProps()} className="table table-hover table-striped table-align-right">
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()} className="table-header">
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())} >
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
                            <tr {...row.getRowProps()} onClick={()=>pushStudentRowClick(row.original.id)} className="align-middle cursor">
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
                <NoStudents />
            )}
            <Modal
                show={isModalOpen}
                onHide={closeModal}
                centered
                animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Remover alun@</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Tem a certeza?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal}>
                            Fechar
                        </Button>
                        <Button onClick={()=>handleRemoveStudent(idToRemove)}>
                            Remover
                        </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default TutorTable