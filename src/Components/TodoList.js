import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";


const TodoList =()=>{
    
        const [todoItems,setTodoItems]=useState([]);
        const [newTodoItem, setNewTodoItem] = useState('');

        function handleAddTodoItem(){
            const newList=[...todoItems,newTodoItem];
            setTodoItems(newList);
            setNewTodoItem('');
        }
        
        const handleDelete = (id) => {
            const updatedTodos = todoItems.filter(todoItems => todoItems.id !== id);
            setTodoItems(updatedTodos);
          }
        
    


    return(

    <section id="home">
        <h1 className="heading">Things ToDo</h1>

        <div className="input">
            <input type="text" value={newTodoItem} onChange={(e)=>setNewTodoItem(e.target.value)} className="todo-input" placeholder="task" />
            <button type="btn" onClick={handleAddTodoItem} className="btn">Add</button> 
        </div>
        
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
            transition={{duration:0.6}}
            variants={{
                hidden:{opacity:0 , y:-50},
                visible:{opacity:1, y:0}
            }} 
        >

        {todoItems.map((value,index)=>(
        <div key={index} className="todolist">
            <ul>
            <li className="list-item">{value}</li>
            </ul>
            <button type="btn" className="btn-del" onClick={()=>handleDelete(value.id)}>Delete</button>  
        </div>
        ))}

        </motion.div>
    </section>
    )

}


export default TodoList;