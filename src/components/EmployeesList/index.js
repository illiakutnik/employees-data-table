import { useContext } from 'react'
import '../../App.css'
import { AppContext } from '../../context'
import EmployeesListItem from './EmployeesListItem'

const EmployeesList = () => {
  const { data } = useContext(AppContext)

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  return (
    <div className="container">
      <h2>Employees</h2>
      {alphabet.map((el, i) => {
        const validEmployees = data.filter(item => item.lastName[0] === el)
        return <div key={i}>
          <h3>{el}</h3>
          {!validEmployees.length ?
            <p>----</p> :
            validEmployees.map(employee => {
              return <EmployeesListItem key={employee.id} employee={employee}/>
            })}
        </div>
      })}
    </div>
  )
}

export default EmployeesList