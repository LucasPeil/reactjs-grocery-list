import {useState} from 'react'
import './App.css';
import AlertMessage from './AlertMessage';
import List from './List';


function App() {
const [name, setName] = useState("")
const [list, setList] = useState([])
const [alert, setAlert] = useState({show:false, type:"", content:""});
const [isEditing,setIsEditing] = useState(false)


const showAlertMessage = (show=false, type="a", content="b")=>{
  setAlert({show,type,content});
}

const handleSubmit = (e)=>{
  e.preventDefault()
  
  if(!name){
    showAlertMessage(true, "danger", "O nome do name é obrigatorio!")
    console.log(`hello ${alert}`)
  }else if(name && isEditing){
    //change the submit button;
    //change the input area

  }else{
    const newItem = {id: new Date().getTime().toString(), title:name}
    setList([...list,newItem])
    setName("")
      
  }


}

const handleEdit = (id)=>{
  setIsEditing(true);
  const product = list.find((item)=> item.id === id);
  setName(product.title)

}
const removeItem = ()=>{}
  
return (
    <div className='fatherDiv' >
    <main >
        <form onSubmit={handleSubmit}>
            {alert.show && <AlertMessage {...alert} removeAlert={showAlertMessage} list/>}
              <label>
                <span>What you to buy?</span>
                <input type="text" placeholder="Exemplo: Leite" onChange={(e)=>setName(e.target.value)} value={name} />
                <button>{isEditing ? "edit": "submit"}</button>
            </label>
        </form>
        { list.length> 0 && (<List list={list} editItem = {handleEdit}/>)}
    </main>
    
    </div>
  );
}

export default App;
