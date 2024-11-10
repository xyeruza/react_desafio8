import {React, useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Profile = () => {
    const {user,logout} = useContext(UserContext);

   

  return (
    <>
    <div className='d-flex m-5 justify-content-center align-items-center profile' >
        <div>
            <img className='rounded-start-pill' src="../src/assets/img/magdalena.jpg" alt="user1" />
        </div>
        <div className='m-4'>
            <div className='' >
                <h2>{user.email}</h2>
            </div>
            <div>
                <Link to="/" onClick={logout} className='btn btn-secondary btn-lg'>Logout</Link>
            </div>
        </div>
    </div>

    </>
  )
}

export default Profile