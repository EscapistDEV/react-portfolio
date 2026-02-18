import React from "react"
import { Header, Footer, Clients, Contact, About, Skills, Portfolio, Services, Home, Nav } from "./components/index"

function App() {

  return (
    <>
    <Nav/>
    <Home/>
    <Header/>
      <div className="container">
          <h1> React Portfolio </h1>
    <Footer/>
      </div>
    </>
  )
}

export default App
