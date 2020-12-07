import moment from 'moment'

const EmployeesBirthdayItem = ({ employee: { lastName, firstName, dob } }) => {
  const name = `${lastName} ${firstName}`
  const formatDOB = moment(dob).format('D MMMM, YYYY')
  return (
    <li>{name} - {formatDOB} year</li>
  )
}

export default EmployeesBirthdayItem
