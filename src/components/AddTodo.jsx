import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";

function AddTodo({ onNewItem }) {

  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();
  const [isDateInput, setIsDateInput] = useState(false);


  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  }
  const handleAddButtonClicked = () => {
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  }
  
  const handleDateFocus = () => {
    setIsDateInput(true);
  };

  const handleDateBlur = () => {
    if (!todoDate) {
      setIsDateInput(false);
    }
  };


  return (
    <>
      <div className="container text-center todo-container">
        <div className="row my-row center">
            <div className="col-6 my-input">
              <input type="text" placeholder="Enter Here" onChange={handleNameChange} value={todoName} ></input>
            </div>
            <div className="col-4 my-input">
              <input type={isDateInput ? "date" : "text"}
            placeholder={isDateInput ? "" : "DD/MM/YYYY"}
            onChange={handleDateChange}
            onFocus={handleDateFocus}
            onBlur={handleDateBlur}
            value={todoDate} ></input>
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-success my-button float" onClick={handleAddButtonClicked}>
                <IoAddOutline />
              </button>
            </div>
        
        </div>
      </div>
    </>
  )
};

export default AddTodo;