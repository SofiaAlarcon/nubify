import './App.css'
import { AuthorizationService } from './services/AuthorizationService';
import { Route } from "wouter";
import Login from './pages/Login';

function App() {
  function handleClick(){
    AuthorizationService.getUserAuthorization();
  }

  return (
    <>
      <Route
        component= {Login}
        path="/login" 
      />
      <h1>nubify</h1>
      <div className="card">
        <button onClick={handleClick}>
          obtener mi nube
        </button>
      </div>
    </>
  )
}

export default App
