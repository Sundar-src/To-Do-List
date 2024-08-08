import TodoItem from "./TodoItem";

const TodoItems = ({onDeleteClick, todoItems}) =>{
  
  return (
    <>
    {todoItems.map((item) => 
    <TodoItem 
    key={item.name}
    todoName={item.name} 
    todoDate={item.dueDate} 
    onDeleteClick={onDeleteClick}> 
    </TodoItem>)  }
    
    
    </>
  )
};

export default TodoItems;