import './App.css';
import UserDetailList from './components/UserDetailList';
import UsernameForm from './components/UsernameForm';
import React, {useState} from 'react';


const App = () => {

  // useState hook za stvaranje state varijabli i funkcija za njihovu promjenu
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  // Asinkrona funckija koja dohvaća PODATKE o korisniku s GitHuba
  const fetchUser = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    setUser(data);
  };

  // Asinkrona funkciju koja dohvaća REPOS korisnika s GitHuba
  const fetchRepos = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}/repos`); //dohvaćanje reposa 
    const data = await response.json();
    setRepos(data);
  };

// Funckija koja ažurira username state varijablu kad se unese novo korisničko ime
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // provjera je li išta uneseno u input field i ako nije vraća nazad alert da se nešto upiše
    if (!username) {
      alert("Morate upisati nešto da bi mogli dohvatiti podatke :)");
      return;
    }
    fetchUser(username);
    fetchRepos(username);
  };

  // Funkcija koja resetira sve state varijable i vraća nazad na tražilicu 
  const handleReset = () => {
    setUsername('');
    setUser(null);
    setRepos([]);
  };

  // Ako postoji korisnik, prikazuje se UserDetailList komponenta, inače se prikazuje UsernameForm komponenta.
  return user ? (                                                       
    <UserDetailList user={user} repos={repos} onReset={handleReset} />
  ) : ( 
    <UsernameForm                                                     
      username={username}
      onUsernameChange={handleUsernameChange}
      onSubmit={handleFormSubmit}
    />
  );
};

export default App;