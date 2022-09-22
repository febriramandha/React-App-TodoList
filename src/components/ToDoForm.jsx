// (Optional) import si react
import React, {useState} from "react";

// component ToDoForm (Functional Component)
const ToDoForm = ({propsSubmitHandler}) => {
    // bikin state untuk menampung input dari todoInput
    const [inputTodo, setInputTodo] = useState("");

    const todoInputOnChangeHandler = (event) => {
        setInputTodo(event.target.value);
    };

    const formSubmitHandler = (event) => {
        // membuat behaviornya kembali ke jalur tidak normal
        event.preventDefault();
        propsSubmitHandler(inputTodo);
        // kita kosongkan value dari si input
        setInputTodo("");
    };

    // ingin membuat render sebuah form
    return (
        // Di dalam sinilah kita akan menuliskan "HTML / JSX"
        <form action="" onSubmit={formSubmitHandler}>
            {/* Tulisan input kerjaan baru*/}
            {/* Label + input*/}
            <div style={{ marginBottom: "0.5em" }}>
                <label htmlFor="todoInput" style={{ marginRight:"0.5em" }}>Input Kerjaan Baru</label>
                {/* untuk si input ini sekarang, kita harus memiliki suatu STATE untuk menampung value dari input */}
                <input type="text" name="todo-input" id="todoInput" value={inputTodo} onChange={todoInputOnChangeHandler} />
            </div>
            {/* button*/}
            <div>
                <button type="submit">Tambah ToDo</button>
            </div>
        </form>
    )
}

export default ToDoForm;