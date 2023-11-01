import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Здесь можно добавить логику для проверки введенных данных и выполнения авторизации
    if (email === 'user@example.com' && password === 'password') {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div className="container">
        <h1>Вы успешно авторизованы!</h1>
        <button className="button" onClick={handleLogout}>
          Выйти
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <form className="form">
        <input
          type="email"
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="input"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button" onClick={handleLogin}>
          Войти
        </button>
      </form>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));