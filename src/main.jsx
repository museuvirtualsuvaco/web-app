import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Firebase, { FirebaseContext } from './components/Firebase';



createRoot(document.getElementById('root')).render(
  
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>
)