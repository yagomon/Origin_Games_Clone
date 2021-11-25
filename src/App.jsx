import './App.css';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Components/Shared/Sidebar/sidebar.jsx';
import Loja from './Pages/Loja (Home)/loja';
import Entrar from './Pages/Entrar/entrar';
import Inscrever from './Pages/Inscrever-se/inscreva-se';
import WishList from './Pages/WishList/wishlist';

import Perfil from './Pages/Perfil/perfil';

axios.defaults.baseURL = 'https://nintendo-shop.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Routes>
        <Route exact path="/" element={<Loja />}/>
        <Route path="/login" element={<Entrar/>}/>
        <Route path="/inscreva-se" element={ <Inscrever/> }></Route>
        <Route path="/wishlist" element={ <WishList/> }></Route>
        <Route path="/profile" element={ <Perfil/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
