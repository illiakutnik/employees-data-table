import { useContext } from 'react'
import '../../../App.css'
import { AppContext } from '../../../context'

const EmployeesListItem = ({ employee }) => {
  const { handleCheckboxChange } = useContext(AppContext)
  const fullName = `${employee.lastName} ${employee.firstName}`
  return (
    <div className="list-item">
      <input
        type="checkbox"
        className="checkbox"
        value={employee.id}
        onChange={handleCheckboxChange}
        checked={employee.selected || false}
      />
      <p>{fullName}</p>
    </div>
  )
}

export default EmployeesListItem