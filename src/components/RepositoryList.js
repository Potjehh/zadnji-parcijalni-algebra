import React from 'react';
import PropTypes from 'prop-types';

const RepositoryList = ({ repos }) => (
  <ul>
    {repos.map((repo) => (
      <li className='listItem' key={repo.id}>{repo.name}</li>
    ))}
  </ul>
);

RepositoryList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepositoryList;