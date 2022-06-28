import {useState} from 'react'
import './App.css';
import AlertMessage from './AlertMessage';
import List from './List';


function App() {
const [item, setItem] = useState("")
const [list, setList] = useState([])
const [alert, setAlert] = useState({show:false, type:"", content:""})
const handleSubmit = (e)=>{
  e.preventDefault()
}
  return (
    <div className='fatherDiv' >
    <main >
        <form onSubmit={handleSubmit}>
            {alert.show && <AlertMessage/>}
              <label>
                <span>What you to buy?</span>
                <input type="text" placeholder="Exemplo: Leite" onChange={(e)=>setItem(e.target.value)} value={item} />
            </label>
        </form>
    </main>
    </div>
  );
}

export default App;
