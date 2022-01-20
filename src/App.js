import React from 'react';
import './App.css';
import Header from './components/Header'; //COMPONENETLERİ BAŞ HARFİ BÜYÜK OLACAK ŞEKİLDE ALMALIYIZ
import User from './components/User';


function App() {

    //return React.createElement("div", null, "hello");
    // Eğerki div kullanmadan yapmak istiyorsak <></> sadece şu şekil kullanabiliriz. Bunun adı da fragmenttir.
    return ( <div>
        <User name = "Mehmet" surname = "Seven" isLoggedIn = { false } friends={["Ahmet","Tayfun","Gökhan"]}/>  </div> )
    }

    export default App;