import './styles.scss'
import { useDispatch, useSelector } from "react-redux"
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import FontAwesomeIcons from "../../components/Buttons/FontAwesomeIcons"
import {removeStudentFromStore} from '../../screens/Explicador/actions'
import { Link } from "react-router-dom"
import { useMemo } from "react"
import { useTable } from 'react-table'

const TutorTable = () => {
    const explicandos = useSelector(state => state.explicandos)
    const dispatch = useDispatch()

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
            Header: 'Disciplina(s)',
            accessor: 'info.subject',
          },
          {
            Header: 'Contacto',
            accessor: 'info.contact',
          },
          {
            Header: '',
            accessor: 'actions',
            Cell: ({row}) => <FontAwesomeIcons classes={'btn-danger'} icon={faTrashAlt} fn={(e)=>removeStudent(e, row.original.id)}/>
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
      } = useTable({ columns, data: explicandos })


    const removeStudent = (e, id) => {
        e.stopPropagation();
        dispatch(removeStudentFromStore(id))
    }

    return (
        <div>
            {explicandos.length >= 1 ? (
                <table {...getTableProps()} className="table table-hover table-striped">
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>
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
                            <tr {...row.getRowProps()} onClick={()=>console.log(row.original.id)}>
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

{/* <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Idade</th>
                        <th scope="col">Escola</th>
                    </tr>
                </thead>
                <tbody>
                    {explicandos.map(aluno => (
                        <tr key={aluno.id}> 
                            <td>{aluno.info.name}</td>
                            <td className="align-middle">{aluno.info.age}</td>
                            <td className="align-middle">{aluno.info.schoolLocation}</td>
                            <td className="text-end">
                                <Link to={`/${aluno.id}`}>
                                    <FontAwesomeIcons icon={faEdit} classes={"btn-primary"}/>
                                </Link>
                                <FontAwesomeIcons icon={faTrashAlt} classes={"btn-danger"} fn={()=>removeStudent(aluno.id)}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> */}