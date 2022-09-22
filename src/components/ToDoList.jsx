import React from "react";

// ada listing todo awalnya ada apa aja
// array of string

// Kita harus bikin ini jadi state !
// const todos = ["Belajar Fundamental React", "Ngoding sampai lemas !"];

// component ToDoList

// destructuring si props
const ToDoList = ({propsTodos}) => {
    return (
        // Root Element "pseudo" / fiktif = Fragment
        <>
            <h3>Listing ToDo List</h3>
            {/*// List yang tidak terurut (Unordered list - ul)*/}
            <ul>
                {/* Kita harus membuat looping yang akan mengembalikan si <li>todos[n[</li> */}
                {propsTodos.map(todo => {
                    return <li>{todo}</li>;
                })}
            </ul>
        </>
    )
};

export default ToDoList;