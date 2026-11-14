import {
    Dispatch, SetStateAction, useState, JSX
} from "react"
import SignIn from "./Sign/SignIn"
import SignUp from "./Sign/SignUp"
import type {
    SignForm, StateSingForm
} from "./types"

import "./style.css"
import selected from "./selected"


export default Authorization

function Authorization({ isTouch, sign, ok }: {
    isTouch: boolean,
    sign: SignForm,
    ok: () => void
}): JSX.Element {

    const [Form, setForm]: StateSingForm = useState<SignForm>((): SignForm => sign)

    const signin: () => void = (): void => setForm((): SignForm => SignIn)
    const signup: () => void = (): void => setForm((): SignForm => SignUp)

    return (
        <>
            <div className={`authorization head ${isTouch ? "mobile" : "" }`}>
                <button 
                    className={`authorization signin ${ Form === SignIn ? "active" : "" }`} 
                    onClick={signin}
                    onFocus={selected.signin}
                    onBlur={selected.unselected}
                >
                    Sign In
                </button>

                <button 
                    className={`authorization signup ${ Form === SignUp ? "active" : "" }`} 
                    onClick={signup}
                    onFocus={selected.signup}
                    onBlur={selected.unselected}
                >
                    Sign Up
                </button>
            </div>
            <Form ok={ok} />
        </>
    )
}
