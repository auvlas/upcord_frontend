import {
    Dispatch, SetStateAction, useState, JSX
} from "react"
import SignIn from "./Sign/SignIn"
import SignUp from "./Sign/SignUp"
import type {
    SignForm, StateSingForm
} from "./types"

import "./style.css"


export default Authorization

function Authorization({ isTouch, ok }: {
    isTouch: boolean, ok: () => void
}): JSX.Element {

    const [Form, setForm]: StateSingForm = useState<SignForm>((): void => SignIn)

    const signin: () => void = (): void => setForm((): SignForm => SignIn)
    const signup: () => void = (): void => setForm((): SignForm => SignUp)

    return (
        <>
            <div id="root-authorization">
                <div className={`authorization ${isTouch ? "mobile" : "" }`}>
                    <button 
                            className={`authorization ${ Form === SignIn ? "active" : "" }`} 
                            onClick={signin}
                    >
                        Sign In
                    </button>

                    <button 
                            className={`authorization ${ Form === SignUp ? "active" : "" }`} 
                            onClick={signup}
                    >
                        Sign Up
                    </button>
                </div>
                <div id="form-authorization">
                    <Form ok={ok} />
                </div>
            </div>
        </>
    )
}
