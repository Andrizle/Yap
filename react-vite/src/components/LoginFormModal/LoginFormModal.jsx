import { useState } from "react";
import { thunkLogin } from "../../redux/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cls, setCls] = useState(true)
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serverResponse = await dispatch(
      thunkLogin({
        email,
        password,
      })
    );

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      closeModal();
    }
  };

  const demoUser = (e) => {
    e.preventDefault();
    setErrors({});
    dispatch(thunkLogin({email: 'demo@aa.io', password: 'password'}))
    .then(closeModal)
    .catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) {
        setErrors(data.errors);
      }
    });
  };

  return (
    <div id="loginModal">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit} id="loginForm">
        <label>
          <span className="inputLabel">Email</span>
          <input
            className="loginInputs"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        {errors.email && <p className="errors">{errors.email}</p>}
        <label >
          <span className="inputLabel">Password</span>
          <input
            className="loginInputs"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {errors.password && <p className="errors">{errors.password}</p>}
        <button type="submit" className="modalBtn" id="loginBtn">Log In</button>
        <button className='modalBtn redBtn' onClick={demoUser}>Log in as Demo User</button>
      </form>
    </div>
  );
}

export default LoginFormModal;
