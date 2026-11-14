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
            <div className="authorization root">
                <div className={`authorization head ${isTouch ? "mobile" : "" }`}>
                    <a className="logo"
                        href="/"
                        onFocus={selected.upcord}
                        onBlur={selected.unselected}
                    >
                        <img
                            className="logo"
                            src="/upcord1.svg"
                        />

                        <h1 className="logo">
                            upcord
                        </h1>
                    </a>

                    <div className="authorization sign">
                        <button 
                                className={`authorization ${ Form === SignIn ? "active" : "" }`} 
                                onClick={signin}
                                onFocus={selected.signin}
                                onBlur={selected.unselected}
                        >
                            Sign In
                        </button>

                        <button 
                                className={`authorization ${ Form === SignUp ? "active" : "" }`} 
                                onClick={signup}
                                onFocus={selected.signup}
                                onBlur={selected.unselected}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
                <div className="authorization form">
                    <Form ok={ok} />
                </div>
            </div>
        </>
    )
}
