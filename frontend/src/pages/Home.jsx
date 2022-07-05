import React from 'react';
import { Link } from 'react-router-dom';
import '../css/pages/Home.css';

function Home() {
  return (
    <section>
      <h1>Welcome</h1>
      <Link to="/login">
        Login
      </Link>
      <Link to="/register">
        Register
      </Link>
    </section>
  );
}

export default Home;
