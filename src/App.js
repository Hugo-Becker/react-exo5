
import './App.css';
import Profil from './components/Profil'

function App() {
  return (
    <div>

      <Profil prenom="Nico" nom="Primo"  > Coach  </Profil>
      <Profil prenom="Martin" nom="Matin" > Chimiste </Profil>
      <Profil prenom="Beyonce" nom="Riri" > Chanteuse </Profil>

    </div>
    

    
  );
}

export default App;
