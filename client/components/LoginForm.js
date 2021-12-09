import React from 'react';

/**
 * COMPONENT
 */

const LoginForm = (props) => {
	const { name, displayName, handleSubmit, error } = props;

	return (
    <div>
    <form onSubmit={handleSubmit} name={name}>
      <div>
        <label htmlFor="username">
          <small>Username</small>
        </label>
        <input name="username" type="text" />
      </div>
      <div>
        <label htmlFor="password">
          <small>Password</small>
        </label>
        <input name="password" type="password" />
      </div>
      <div>
        <button type="submit">{displayName}</button>
      </div>
      {error && error.response && <div> {error.response.data} </div>}
    </form>
  </div>
	);
};

export default LoginForm;
