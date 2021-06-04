import './styles.scss'
import { useDispatch, useSelector } from "react-redux"
import { faEye, faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons"
import FontAwesomeIcons from "../../components/Buttons/FontAwesomeIcons"
import {removeStudentFromStore} from '../../screens/Explicador/actions'
import { useHistory } from "react-router-dom"
import { useMemo } from "react"
import { useTable } from 'react-table'
import { useSortBy } from 'react-table/dist/react-table.development'

const TutorTable = () => {
    const explicandos = useSelector(state => state.explicandos)
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
            accessor: 'info.student.grade',
          },
          {
            Header: 'Disciplina(s)',
            accessor: d => d.info.tutoring.subjects.map((classes,i) => <p key={i}>{classes.subject}</p>),
          },
          {
            Header: 'Contacto',
            accessor: 'info.student.contact',
          },
          {
            Header: 'Regime',
            accessor: d => d.info.tutoring.attendance,
          },
          {
            Header: '',
            accessor: 'actions',
            width: 150,
            Cell: ({row}) => {
                return (
                    <div>
                        <FontAwesomeIcons variant={'primary'} classes={"icons"} icon={faEye} fn={() => handleRowClick(row.original.id)}/>
                        <FontAwesomeIcons variant={'secondary'} classes={"icons icon"} icon={faEdit} fn={(e)=>removeStudent(e, row.original.id)}/>
                        <FontAwesomeIcons variant={'danger'} classes={"icons icon"} icon={faTrashAlt} fn={(e)=>removeStudent(e, row.original.id)}/>
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
      } = useTable({ columns, data: explicandos }, useSortBy)


    const removeStudent = (e, id) => {
        e.stopPropagation();
        dispatch(removeStudentFromStore(id))
    }

    const handleRowClick = (id) => {
        history.push(`/alun@/${id}`)
    }

    return (
        <div>
            {explicandos.length >= 1 ? (
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
                            <tr {...row.getRowProps()} onClick={()=>handleRowClick(row.original.id)} className="align-middle cursor">
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps({
                                            style: {width: cell.column.width }
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
                <div>Loader</div>
            )}
        </div>
    )
}

export default TutorTable