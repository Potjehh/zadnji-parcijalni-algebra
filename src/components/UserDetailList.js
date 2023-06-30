import React from 'react';
import PropTypes from 'prop-types';
import RepositoryList from './RepositoryList';

const UserDetailList = ({ user, repos, onReset }) => ( //funkcijska komponenta - tri parametra kao i kod forme, prikazuje sliku korisnika, GitHub ime, lokaciju, opis, naslove repozitorija te RepositoryList za prikaz popisa reposa koje koriste 
    <div className='podaciKorisnika'> 
      <img src={user.avatar_url} width={'100px'} height={'100px'} alt="Profile" /> 
      <h2> Name: {user.name}</h2>
      <h3> Location{user.location}</h3>
      <p> Bio: {user.bio}</p>
      <h3>Repositories:</h3>
      <RepositoryList repos={repos} />
      <button className='resetButton' onClick={onReset}>Povratak na tražilicu</button>
    </div>
  ); //ispis korisničkog imena, lokacije i opisa

UserDetailList.propTypes = {
        user: PropTypes.object.isRequired, //provjera da je prop tip obavezno objekt
        repos: PropTypes.array.isRequired, //provjera da je prop tip obavezno array
        onReset: PropTypes.func.isRequired, //provjera da je prop tip obavezno funkcija
      }; 


export default UserDetailList;