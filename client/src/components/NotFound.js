import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@material-ui/core';

const NotFound = () => {
  const main = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const container = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    backgroundColor: 'white',
  };
  const title = {
    fontSize: '80px',
    marginTop: 10,
    marginBottom: 10,
  };
  const description = {
    fontSize: '40px',
    padding: 20,
    backgroundColor: '#eeeeee',
    borderRadius: '20px',
    marginTop: 10,
    marginBottom: 10,
  };
  const emougi = {
    fontSize: '100px',
    transform: 'rotate(90deg)',
    marginTop: 10,
    marginBottom: 30,
    color: '#3c4ab1',
  };
  const link = {
    fontSize: '40px',
    marginTop: 30,
    marginBottom: 30,
    textDecoration: 'none',
    border: '2px solid #000',
    borderRadius: 20,
    padding: 20,
    background: 'linear-gradient(#e66465, #9198e5)',
    color: '#fff',
  };

  return (
    <div style={main}>
      <Card>
        <div style={container}>
          <h1 style={title}>404</h1>
          <p style={emougi}>:(</p>
          <p style={description}>Out of nothing, something.</p>
          <Link style={link} to="/">Go to Home</Link>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;
