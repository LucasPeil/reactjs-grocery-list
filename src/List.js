import {FaEdit, FaTrash} from "react-icons/fa"
const List = ({list, editItem,removeItem})=>{
    const editingItem = list.find((item)=> item.currentlyEditing == true)
    return (
        <div>
            {editingItem && 
                <article>
                <p>{editingItem.title}</p>
                <button onClick={()=>editItem(editingItem.id)}> <FaEdit/></button>
                <button onClick={()=> removeItem(editingItem.id)}> <FaTrash/></button>
                </article>
            }

            {!editingItem && list.map((item)=>{
                const {id,title}= item;
                return(
                    <article key={id}>
                    <p>{title}</p>
                    <button onClick={()=>editItem(id)}> <FaEdit/></button>
                    <button onClick={()=> removeItem(id)}> <FaTrash/></button>
                    </article>
                )
            })}

        </div>
     
        
    )
}

export default List