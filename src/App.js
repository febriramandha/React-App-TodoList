// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";

import ToDoIncrement from "./components/ToDoIncrement";

import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([
    // "Belajar Fundamental React", 
  ]);
  // bikin satu fungsi untuk menambahkan si todos
  const fungsiPenambahTodos = (todo) => {
    console.log('Todo input adalah', todo);
    // tambahkan si todo ke dalam todos

    // sekarang kita harus membuat sebuah array yg baru berdasarkan data todos yg lama ditambahkan dengan si todo
    // kita bisa menggunakan triple DOT (...) = spread operator
    setTodos([...todos, todo]);
  };

  return (
    <div className="App">
      {/* header tamnbahan disini*/}
      <header>
        <h1>Aplikasi Todo List Pertamaku</h1>
      </header>

    <section style={{margin: "1em 0em"}}>
      <ToDoIncrement />
    </section>

    <section style={{margin: "2em 0em"}}>
      {/* Kita panggil si ToDoForm*/}
      <ToDoForm propsSubmitHandler={fungsiPenambahTodos} />

      {/* Kita akan menggunakan suatu Props */}
      <ToDoList propsTodos={todos} />
    </section>

    <footer>
      <h3>Dibuat oleh Febri Ramandha &copy; 2022</h3>
    </footer>
    </div>
  );
}

export default App;
