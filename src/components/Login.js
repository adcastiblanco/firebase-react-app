import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuthContext();
  const [form, setForm] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let data = await login(form.email, form.password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <form className="text-center" onSubmit={handleSubmit}>
      <div className="my-2">
        <label>Email</label>
        <input
          className="border"
          type="email"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="my-2">
        <label>Password</label>
        <input
          className="border"
          type="password"
          name="password"
          onChange={handleChange}
        />
      </div>
      <button className="border shadow-md px-6 py-1">Iniciar sesión</button>
    </form>
  );
}

export default Login;
