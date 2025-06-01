import { useState } from 'react';
// This component is a simple form that allows users to submit a task.

function Form(props) {

    const [name, setName] = useState("");
    // The useState hook initializes the name state variable with "Learn React".
    
    function handleChange(event) {
        setName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit(name);
        setName(""); // Clear the input field after submission
        
    }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
