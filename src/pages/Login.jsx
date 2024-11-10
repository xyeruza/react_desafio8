import {React, useContext} from 'react'
import { UserContext } from '../context/UserContext'
const Login = () => {
    const {email,password,setEmail,setPassword,handleSubmitLogin} = useContext(UserContext);

    return (
    <>
    <main className="form-signin m-5 p-5">
      <div className="container formulario">
        <form onSubmit={handleSubmitLogin} >
          <h1 className="h3 mb-3 fw-normal p-3">Login</h1>
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
          <button className="btn btn-primary py-2" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </main>
  </>
  )
}

export default Login