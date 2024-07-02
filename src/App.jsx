import { useEffect,useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  const [cards, setcards] = useState([])


  let fetchData = async ()=>{
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json();
    setcards(data)
   


  }
  useEffect(() => {
  fetchData()
  }, [])
  

  return (
    <>
      <Navbar/>
      <div className="container">
        {cards.map((cards)=>{
          return <div key= {cards.id}className="card">
           <h1>{cards.title}</h1>
           <h5>{cards.body}</h5>
          <span> userId {cards.userId}</span>
         
           </div>
        })}
       

       
        </div>
      <Footer/>
    </>
  )
}

export default App
