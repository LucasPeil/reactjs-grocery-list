import {FaEdit, FaTrash} from "react-icons/fa"
const List = ({list, editItem,removeItem})=>{
    const editingItem = list.find((item)=> item.currentlyEditing == true)
    return (
        <div>
            {editingItem && 
                <article className="mt-3 d-flex justify-content-between ">
                    <div >
                        <p className="mt-1">{editingItem.title}</p>
                    </div>
                    <div >
                        <button className="btn-edit"  onClick={()=>editItem(editingItem.id)}> < FaEdit /></button>
                        <button className="btn-delete" onClick={()=> removeItem(editingItem.id)}> <FaTrash/></button>
                    </div>
               
                </article>
            }

            {!editingItem && list.map((item)=>{
                const {id,title}= item;
                return(
                <article className="mt-3 d-flex justify-content-between " key={id}>
                    <div className="listItem">
                        <p className="">{title}</p> 
                    </div>
                    <div >                   
                        <button className="btn-edit"  onClick={()=>editItem(id)}> < FaEdit /></button>
                        <button className="btn-delete" onClick={()=> removeItem(id)}> <FaTrash/></button>
                    </div>
                
                </article>
                )
            })}
            

        </div>
     
        
    )
}

export default List