import React from 'react'
import './App.css'
import AppContextProvider from './context'
import EmployeesList from './components/EmployeesList'
import EmployeesBirthdays from './components/EmployeesBithdays'

function App() {
  return (
    <div className="app">
      <AppContextProvider>
        <EmployeesList/>
        <EmployeesBirthdays/>
      </AppContextProvider>
    </div>
  )
}

export default App
