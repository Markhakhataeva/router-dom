import React from 'react';
import {Header} from "./Nawbar";
import {HomePage} from "./HomePage";
import {Features} from "./Features";
import {Contacts} from "./Contacts";
import {Route, Routes} from "react-router-dom";

export const App = (props) => {



    return (
       <div className="App">
           <Header />

           <Routes>
               <Route path="/" element={<HomePage/>} />
               <Route path="/features" element={<Features/>}/>
               <Route path="/contacts" element={<Contacts/>}/>
           </Routes>
       </div>

    )
}
