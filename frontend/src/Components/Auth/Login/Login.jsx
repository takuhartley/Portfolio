import { GoogleLogin } from 'react-google-login';
import './Login.css';
const clientId = "904186568841-gks6q3vtdflehakqfei6rb3vm4p6hkev.apps.googleusercontent.com";

const Login = () => {
	const onSucess =  (res) => {
		console.log("Login Sucess! Current user: ", res.profileObj)
	}
	const onFailure = (res) => {
		console.log("Login Failure! Current user: ", res.profileObj)
	}

	return (
		<>
			<div className="login_container">
			<GoogleLogin
    		clientId={clientId}
    		buttonText="Login"
    		onSuccess={onSucess}
    		onFailure={onFailure}
    		cookiePolicy={'single_host_origin'}
  />
			</div>
		</>
	);
};

export default Login;