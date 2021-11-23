import './App.css';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Shared/Sidebar/sidebar.jsx';
import Loja from './Pages/Loja/loja';



function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Routes>
        <Route exact path="/" element={<Loja />}/>

      </Routes>
    </div>
  );
}

export default App;
