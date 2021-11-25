import './App.css';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Shared/Sidebar/sidebar.jsx';
import Loja from './Pages/Loja/loja';
import Entrar from './Pages/Entrar/entrar';
import Inscrever from './Pages/Inscrever-se/inscreva-se';
import WishList from './Pages/WishList/wishlist';



function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Routes>
        <Route exact path="/" element={<Loja />}/>
        <Route path="/login" element={<Entrar/>}/>
        <Route path="/inscreva-se" element={ <Inscrever/> }></Route>
        <Route path="/wishlist" element={ <WishList/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
