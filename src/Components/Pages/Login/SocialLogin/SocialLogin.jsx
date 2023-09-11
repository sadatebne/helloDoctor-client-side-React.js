import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
 import useAuth from '../../../../hooks/useAuth';
import Swal from 'sweetalert2';


const SocialLogin = () => {
    const location = useLocation()
    const from = location.state?.pathname || "/"

    const { googleLogin } = useAuth()
    const navigate = useNavigate()
    const handleGoogle = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email, photo: loggedUser.photoURL }
                            fetch('http://localhost:3000/users', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(saveUser)
                            })
                Swal.fire({
                    position: 'middle',
                    icon: 'success',
                    title: 'SuccessFully Register',
                    showConfirmButton: false,
                    timer: 1500
                  })
                console.log(loggedUser)
                //logOut()
                navigate(from)
            })
            .catch(error => {
                console.log(error.message);
            })


    }

    return (
        <div>
            <div className="divider">OR</div>
            <div className='text-center'>
                <button onClick={handleGoogle} className="btn btn-circle btn-outline">
                    <FaGoogle color='blue' fontSize="2em"/>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;