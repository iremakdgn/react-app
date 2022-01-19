import React from 'react';
import './App.css';
import Header from './components/Header'; //COMPONENETLERİ BAŞ HARFİ BÜYÜK OLACAK ŞEKİLDE ALMALIYIZ

const name = "Mehmet";
const isLoggedIn = false;

function App() {

    //return React.createElement("div", null, "hello");
    // Eğerki div kullanmadan yapmak istiyorsak <></> sadece şu şekil kullanabiliriz. Bunun adı da fragmenttir.
    return ( < div >
        <
        h1 > { isLoggedIn ? name : "Giriş yapmadınız" } < /h1>  < /
        div > )
}

export default App;