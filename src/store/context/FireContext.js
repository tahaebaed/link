import React from 'react'
import { initializeApp } from "firebase/app";
function FireContext() {
    const fireBaseConfig={
        apiKey: "AIzaSyBOpPAb3VfIwJis3nqNlW60dr2pHppKyR8",
        authDomain: "link-70e1c.firebaseapp.com",
        projectId: "link-70e1c",
        storageBucket: "link-70e1c.appspot.com",
        messagingSenderId: "356291168825",
        appId: "1:356291168825:web:094ccd87848867f2f8dbe8",
        measurementId: "G-V46Z1VF42B"      
    }
    const app=initializeApp(fireBaseConfig)
  return (
    <div>

    </div>
  )
}

export default FireContext