import {useState,useEffect} from 'react'
import './App.css';
import AlertMessage from './AlertMessage';
import List from './List';

const getLocalStorage = ()=>{
  let list = localStorage.getItem("list");
  if(list){
    return list = JSON.parse(localStorage.getItem("list"))
  }else{
    return []
  }
}

function App() {
const [name, setName] = useState("")
const [list, setList] = useState(getLocalStorage());
const [alert, setAlert] = useState({show:false, type:"", content:""});
const [isEditing,setIsEditing] = useState(false);
const [elementEditedId, setElementEditedId] = useState();


const showAlertMessage = (show=false, type="a", content="b")=>{
  setAlert({show,type,content});
}

const handleSubmit = (e)=>{
  e.preventDefault();
  
  if(!name){
    showAlertMessage(true, "danger", "O nome do name é obrigatorio!");
    console.log(`hello ${alert}`);
  }else if(name && isEditing){

   setList(list.map((item)=>{

    if(item.id === elementEditedId){
      item.currentlyEditing = false;
      return {...item, title:name}
    } 
    return item;

   }))
   setName("");
   setIsEditing(false);
   setElementEditedId(null);
   showAlertMessage(true,"success", "Item editado com sucesso");

  }else{
    const newItem = {id: new Date().getTime().toString(), title:name, currentlyEditing:false};
    setList([...list,newItem]);
    setName("");
      
  };

};
const editItem = (id)=>{
  setIsEditing(true);
  const product = list.find((item)=> item.id === id);
  product.currentlyEditing=true
  setElementEditedId(id);
  setName(product.title);
}
const removeItem = (id)=>{
  showAlertMessage(true, "success", `Item removed`);
  setList(list.filter((item)=>{ return item.id !== id}));
  
}

const clearList = ()=>{
  showAlertMessage(true, "danger", "List is empty");
  setList([]);
}
useEffect(()=>{
  localStorage.setItem("list", JSON.stringify(list)) ;
}, [list]);

return (
    <div className='fatherDiv' >
    
    <main >
        {alert.show && <AlertMessage {...alert} removeAlert={showAlertMessage} list/>}
        <form onSubmit={handleSubmit}>
              <label>
                <span>What you to buy?</span>
                <input type="text" placeholder="Exemplo: Leite" onChange={(e)=>setName(e.target.value)} value={name} />
                <button>{isEditing ? "edit": "submit"}</button>
            </label>
        </form>
        { list.length> 0 && (<List list={list} editItem = {editItem} removeItem={removeItem}/>)}
        {list.length>0 && !isEditing && <button onClick={clearList}>Clear all itens of the list</button>}
    </main>
    
    </div>
  );
}

export default App;
