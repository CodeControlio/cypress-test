import React,{useState} from 'react'

function App() {
  const [name, setName] = useState('');
  const [city,setCity] = useState('')
  const [showMessage, setShowMessage] = useState(false);

  const displayMessage = (e)=>{
    e.preventDefault();
    setShowMessage(true)
  }

  return (
    <div className="App" style={{display:"flex", justifyContent:"center" , alignItems:"center", paddingTop:"15%"}}>
      <form onSubmit={displayMessage}>
        <label>Name</label>
        <input id="name" value={name} onChange={(e)=>{setName(e.target.value); setShowMessage(false)}} ></input>
        {/* <label>City</label>
        <input value={city} onChange={(e)=>{setCity(e.target.value); setShowMessage(false)}} ></input> */}
        <button type="submit">Greet</button>
        {showMessage ? <div id="greetings"> Hello, I am {name} Hope you are doing good</div> : ''}
      </form>
    </div>
  );
}

export default App;
