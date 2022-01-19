import React from 'react';
import './App.css';
import Header from './components/Header'; //COMPONENETLERİ BAŞ HARFİ BÜYÜK OLACAK ŞEKİLDE ALMALIYIZ

function App() {

    //return React.createElement("div", null, "hello");
    // Eğerki div kullanmadan yapmak istiyorsak <></> sadece şu şekil kullanabiliriz. Bunun adı da fragmenttir.
    return ( < div >
        <
        h1 > Hello React < /h1> <
        Header / >
        <
        p className = 'text' >
        Lorem ipsum lorem ipsum lorem ipsum < /p> <
        label htmlFor = 'myinput' >
        Name <
        input id = 'myinput' > < /input> < /
        label > <
        /div > )
    }

    export default App;