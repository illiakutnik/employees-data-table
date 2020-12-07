import { useContext } from 'react'
import '../../App.css'
import moment from 'moment'
import { AppContext } from '../../context'
import EmployeesBirthdayItem from './EmployeesBithdaysItem'


const EmployeesBirthdays = () => {
  const { data } = useContext(AppContext)

  const selectedData = data.filter(el => el.selected)
  if (!selectedData.length) return (
    <div className="container birthdaysContainer">
      <h2>No selected employees</h2>
    </div>
  )

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const renderMonths = monthNames.map(month => {
    const monthList = selectedData.filter(el => moment(el.dob).format('MMMM') === month)
    if (!monthList.length) return null
    return (
      <div key={month}>
        <h3>{month}</h3>
        <ul>
          {monthList.map(employee => <EmployeesBirthdayItem key={employee.id} employee={employee}/>)}
        </ul>
      </div>
    )
  })
  return (
    <div className="container birthdaysContainer">
      <h2>Employees Birthdays</h2>
      {renderMonths}
    </div>
  )
}

export default EmployeesBirthdays
