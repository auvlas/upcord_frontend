import { useState, JSX } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

import './Authorization.css';


type FormType = typeof SignIn | typeof SignUp

function Authorization({ ok }: () => void): JSX.Element {

    const [CurrentForm, setCurrentForm]: [
        FormType, 
        React.Dispatch<React.SetStateAction<FormType>>
    ] = useState<FormType>(SignIn);

    const clickSignIn = (): void => {
        if (CurrentForm !== SignIn) {
            setCurrentForm(SignIn);
        }
    }

    const clickSignUp = (): void => {
        if (CurrentForm !== SignUp) {
            setCurrentForm(SignUp)
        }
    }

    const [activeSignIn, activeSignUp]: [string, string]
            = ((): [string, string] => {
        switch (CurrentForm) {
            case SignIn:
                return ["active", ""];
            case SignUp:
                return ["", "active"];
            default:
                return ["", ""];
        }
    })();

    return (
        <>
            <div>
                <button 
                        className={`sign signin ${activeSignIn}`} 
                        onClick={clickSignIn}
                >
                    Sign In
                </button>

                <button 
                        className={`sign signup ${activeSignUp}`} 
                        onClick={clickSignUp}
                >
                    Sign Up
                </button>
            </div>
            {CurrentForm && <CurrentForm ok={ok} />}
        </>
    );
}

export default Authorization;
