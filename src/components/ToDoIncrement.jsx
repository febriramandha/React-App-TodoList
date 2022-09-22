// untuk membuat state kita akan menggunakan suatu fungsi bawaan dari React, namanya adalah useState
import React, { useState } from "react";

// definisikan suatu angka awalnya
// let counter = 0;

// Functional component
const ToDoIncrement = () => {
    // counter khusus di dalam si ToDoIncrement
    // local variabel yang reaktif (state !)

    // Definisikan state
    // index 0 = nama variable reaktif (state)
    // index 1 = nama dari fungsi yang digunakan untuk memutasikan (mengganti) si variable reaktif
    // Selalu Asumsikan bahwa si State adalah IMMUTABLE (tidak boleh di re-assign)
    const [counter, setCounter] = useState(0);

    // Definisikan fungsi untuk menghandle on click
    function buttonTambahCounterOnClickHandler() {
        console.log(counter);
        // counter = counter + 1;
        setCounter(counter + 1);
    };
    
    return (
        <>
            <div>{counter}</div>
            <div>
                {/* Button ny bisa di klik */}
                {/* on<Namaevent> */}
                {/* click => onclick */}
                {/* akan mengarah pada suatu fungsi */}
                <button onClick={buttonTambahCounterOnClickHandler}>Tambah Counter</button>
            </div>
        </>
    );
};

export default ToDoIncrement;