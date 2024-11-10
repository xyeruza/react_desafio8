import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext ();

const UserProvider =({children})=>{


const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmar_password, setConfirmar_password] = useState("");
const [user, setUser] = useState(null);

//funcion para llamar la API con los usuarios durante el login
const handleSubmitLogin = async (e) => {
  e.preventDefault();

// Validacion
if (
  !email.trim() ||
  !password.trim()
  
) {
  alert("Todos los campos son obligatorios");
  return;
}
if (password.length < 6) {
  alert("La password debe contener al menos 6 caracteres");
  return;
}
//Llamada a la API
  const response = await axios.post("http://localhost:5000/api/auth/login", {
    email,
    password
  });

  localStorage.setItem("token", response.data.token);
  alert("Haz sido logueado");
  setUser(response.data);
};

//funcion para llamar la API con los usuarios durante el register
const handleSubmitRegister = async (e) => {
  e.preventDefault();

  // Validacion
  if (
    !email.trim() ||
    !password.trim() ||
    !confirmar_password.trim()
    
  ) {
    alert("Todos los campos son obligatorios");
    return;
  }
  if (password.length < 6) {
    alert("La password debe contener al menos 6 caracteres");
    return;
  }
  if (password !== confirmar_password) {
    alert("Password no coincide");
    return;
  }
  //Llamada a la API
    const response = await axios.post("http://localhost:5000/api/auth/register", {
      email,
      password
    });

    localStorage.setItem("token", response.data.token);
    alert("Haz sido registrado");
    setUser(response.data);
  };

  //logout
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    alert("Haz cerrado sesion");
  };

  //funcion para traer el user


  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        const response = await axios.get("http://localhost:5000/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      }
    };
    getUser();

  },[]);
    
console.log(user);
  return (
    <UserContext.Provider value={{user,email,password,setEmail,setPassword,confirmar_password,setConfirmar_password,handleSubmitLogin,handleSubmitRegister,logout}}>
        {children}
    </UserContext.Provider>
  )

}

export default UserProvider;