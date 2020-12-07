import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [data, setData] = useState([])

  const getData = async () => {
    try {
      const res = await axios.get(`https://yalantis-react-school-api.yalantis.com/api/task0/users`)
      let selected = localStorage.getItem('selected')
      if (selected) {
        const data = res.data.map(el => {
          if (selected.includes(el.id)) {
            return { ...el, selected: true }
          }
          return el
        })
        setData(data)
      } else {
        setData(res.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target
    let selected = localStorage.getItem('selected')
    selected = selected ? JSON.parse(selected) : []
    if (!checked) {
      selected = selected.filter(el => el !== value)
    } else {
      selected.push(value)
    }
    localStorage.setItem('selected', JSON.stringify(selected))
    setData(data.map(item =>
      item.id === value
        ? { ...item, selected: checked }
        : item
    ))
  }

  return (
    <AppContext.Provider value={{ data, handleCheckboxChange }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
