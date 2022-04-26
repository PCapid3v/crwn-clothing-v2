import SignUpForm from '../../sign-up-form/sign-up-form.component';
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'



const SignIn = () => {
    const logGoogleUser = async () => {
        const response =await signInWithGooglePopup();
        console.log(response)
    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn