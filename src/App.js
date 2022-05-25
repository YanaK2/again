import {Routes, Route} from "react-router-dom";
import Add from "./pages/addpet";
import SearchPage from "./pages/SearchPage";
import Reg from "./pages/reg";
import Pet from "./pages/pet";
import First from "./pages/first";
import Auth from "./pages/auth";
import Edit from "./pages/edit";
import Orders from "./pages/orders";
import Profile from "./pages/profile";
import Test from "./pages/test";


function App() {
  return (

         (<div className="App">

        <Routes>
            <Route path={'/test'} element={<Test/>}/>
            <Route path={'/first'} element={<First/>}/>
            <Route path={'/SearchPage'} element={<SearchPage/>}/>
            <Route path={'/reg'} element={<Reg/>}/>
            <Route path={'/pet'} element={<Pet/>}/>
            <Route path={'/addpet'} element={<Add/>}/>
            <Route path={'/auth'} element={<Auth/>}/>
            <Route path={'/edit'} element={<Edit/>}/>
            <Route path={'/orders'} element={<Orders/>}/>
            <Route path={'/profile'} element={<Profile/>}/>






        </Routes>

    </div>))
}

export default App;
