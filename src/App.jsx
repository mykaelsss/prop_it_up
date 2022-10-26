import { useState } from 'react'
import './App.css'
import MyNewComponent from './components/someClassComponent';
function App() {
  // const peopleArr =[
  //   {"firstName":"Jane", "lastName":"Doe", "age":45, "hairColor":"Black"},
  //   {"firstName":"John", "lastName":"Smith","age":88,"hairColor":"Brown"},
  //   {"firstName":"Millard", "lastName":"Fillmore","age":50,"hairColor":"Brown"},
  //   {"firstName":"Maria", "lastName":"Smith","age":62,"hairColor":"Brown"}
  // ]
  return (
    <div className="App">
      <div>
        <MyNewComponent firstname = {"Doe"} lastname = {"Jane"} age = {45} haircolor = {"Black"}/>
        <MyNewComponent firstname = {"Smith"} lastname = {"John"} age = {88} haircolor = {"Brown"}/>
        <MyNewComponent firstname = {"Fillmore"} lastname = {"Millard"} age = {50} haircolor = {"Brown"}/>
        <MyNewComponent firstname = {"Smith"} lastname = {"Maria"} age = {62} haircolor = {"Brown"}/>
      </div>
    </div>
  )
}

export default App
