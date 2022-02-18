import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const { singUp } = useAuthContext();
  const [form, setForm] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = await singUp(form.email, form.password);
    navigate("/");
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
      <button className="border shadow-md px-6 py-1">Registrar</button>
    </form>
  );
}

export default Register;
