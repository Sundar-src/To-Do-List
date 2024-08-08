import {RiDeleteBin5Fill} from "react-icons/ri"
function TodoItem({todoName, todoDate, onDeleteClick}) {


  return (
    <>
      <div className="container todo-container">
        <div className="row my-row">
          <div className="col-6">
          <input className="form-check-input my-input" type="checkbox" value="" id="firstCheckbox" />
            {todoName}
          </div>
          <div className="col-4 my-input">
            {todoDate}
          </div>
          <div className="col-2 my-input">
            <button type="button" className="btn btn-danger my-button" onClick={() => onDeleteClick(todoName)}>
            <RiDeleteBin5Fill />
            </button>
          </div>
        </div>
      </div>
    </>

  )
};

export default TodoItem;