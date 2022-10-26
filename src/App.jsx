import { useState } from 'react'
import './App.css'
import PersonCard from './components/someClassComponent';
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
        <PersonCard firstname = { "Doe" } lastname = { "Jane" } age = { 45 } haircolor = { "Black" }/>
        <PersonCard firstname = { "Smith" } lastname = { "John" } age = { 88 } haircolor = { "Brown" }/>
        <PersonCard firstname = { "Fillmore" } lastname = { "Millard" } age = { 50 } haircolor = { "Brown" }/>
        <PersonCard firstname = { "Smith" } lastname = { "Maria" } age = { 62 } haircolor = { "Brown" }/>
      </div>
    </div>
  )
}

export default App
