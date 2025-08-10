
import React from 'react'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Main from './components/Main'
import Profile from './components/Profile'
import SignInForm from './components/SignInForm'
import SoundPad from './components/SoundPad'

function App() {
const [userName, setUserName] = React.useState("joe")
  return (
    <>
      <Header userName = {userName} />
      <Body  userName = {userName} />
      <Main />
      <Profile />
      <SignInForm />
      <SoundPad darkMode = {true}/>
    </>
  )
}

export default App
