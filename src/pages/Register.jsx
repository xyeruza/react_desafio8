import {React, useContext} from 'react'
import { UserContext } from '../context/UserContext'
//Estados del formulario
const Register = () => {
  const {email,password,confirmar_password,setEmail,setPassword,setConfirmar_password,handleSubmitRegister} = useContext(UserContext);



  return (
    <>
      <main className="form-signin m-4 p-5">
        <div className="container formulario">
        <h1 className="h3 mb-3 fw-normal py-3">Registrar</h1>
          <form onSubmit={handleSubmitRegister}>
            <label htmlFor="floatingEmail">Email</label>
            <input
              type="email"
              className="form-control"
              id="floatingEmail"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              value={email}
            />
            <br />
            <label htmlFor="floatingPassword">Password</label>
            <input
              type="text"
              className="form-control"
              id="floatingPassword"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              value={password}
            />
            <br/>
            <label htmlFor="floatingConfirmarPassword">Confirmar Password</label>
            <input
              type="text"
              className="form-control"
              id="floatingConfirmarPassword"
              name="confirmar_password"
              onChange={(e) => setConfirmar_password(e.target.value)}
              placeholder="Confirmar Password"
              value={confirmar_password}
            />
            <br/>
            <p>*Password debe contener al menos 6 caracteres</p>
            <button className="btn btn-primary py-2" type="submit">
              Registrar
            </button>
          </form>
        </div>
      </main>
    </>
)};


export default Register;
