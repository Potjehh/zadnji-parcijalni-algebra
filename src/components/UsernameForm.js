import React from 'react';
import PropTypes from 'prop-types';

const UsernameForm = ({ username, onUsernameChange, onSubmit }) => ( //funkcionalna komponenta koja prima tri parametra, na submit zove funckiju
  <div className='divContainerForma'>
  <div className='forma'>
  <form onSubmit={onSubmit}>  
  <input className='inputForm' type="text" value={username} onChange={onUsernameChange} placeholder='npr. Facebook'/>
  <br></br>
  <button className='submitButton' type="submit">Dohvati korisnika</button>
</form>
</div>
</div>
);

UsernameForm.propTypes = { //definiranje tipova propsa
  username: PropTypes.string.isRequired, //string obavezan prop tip
  onUsernameChange: PropTypes.func.isRequired, //funckija obavezan prop tip
  onSubmit: PropTypes.func.isRequired, //funckija obavezan prop tip
};

export default UsernameForm;