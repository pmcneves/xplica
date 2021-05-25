import './styles.scss'
import { useDispatch, useSelector } from "react-redux"
import { faInfo, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
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
            accessor: 'info.name',
          },
          {
            Header: 'Escola',
            accessor: 'info.school',
          },
          {
            Header: 'Ano',
            accessor: 'info.grade',
          },
          {
            Header: 'Disciplina(s)',
            accessor: 'info.subject',
          },
          {
            Header: 'Contacto',
            accessor: 'info.contact',
          },
          {
            Header: 'Contacto EE',
            accessor: 'info.guardianContact',
          },
          {
            Header: 'Presencial/Online',
            accessor: '',
          },
          {
            Header: '',
            accessor: 'actions',
            Cell: ({row}) => {
                return (
                    <div>
                        <FontAwesomeIcons classes={'btn-primary icons'} icon={faInfo} fn={() => handleRowClick(row.original.id)}/>
                        <FontAwesomeIcons classes={'btn-danger fa-lg icons icon'} icon={faTrashAlt} fn={(e)=>removeStudent(e, row.original.id)}/>
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
        history.push(`/student/${id}`)
    }

    return (
        <div>
            {explicandos.length >= 1 ? (
                <table {...getTableProps()} className="table table-hover table-striped table-align-right">
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
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
                                        <td {...cell.getCellProps()}>
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