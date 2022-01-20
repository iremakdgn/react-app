import React from 'react';
import './App.css';
import Header from './components/Header'; //COMPONENETLERİ BAŞ HARFİ BÜYÜK OLACAK ŞEKİLDE ALMALIYIZ
import User from './components/User';

const name = "Mehmet";
const isLoggedIn = false;

function App() {

    //return React.createElement("div", null, "hello");
    // Eğerki div kullanmadan yapmak istiyorsak <></> sadece şu şekil kullanabiliriz. Bunun adı da fragmenttir.
    return ( < div >
        <
        User name = "Mehmet"
        surname = "Seven"
        isLoggedIn = { false }
        / > <
        /div> )
    }

    export default App;