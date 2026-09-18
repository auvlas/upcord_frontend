import { useState, Fragment } from "react"
import SignIn from "./SignIn"
import SignUp from "./SignUp"

import "./Authorization.css"


function Authorization({ ok }: { ok: () => void }) {
    const [CurrentForm, setCurrentForm] = useState<React.ComponentType<any>>(() => SignIn)

    const clickSingIn = () => {
        if (CurrentForm !== SignIn) {
            setCurrentForm(() => SignIn);
        }
    }

    const clickSingUp = () => {
        if (CurrentForm !== SignUp) {
            setCurrentForm(() => SignUp);
        }
    }

    const activeClass: string = (() => {
        switch (CurrentForm) {
            case SignIn:
                return "signin"
            case SignUp:
                return "signup"
        }
        return ""
    }) ()

    return (
        <>
            <div className={`sign-buttons ${activeClass}`}>
                <button onClick={clickSingIn}>Sing In</button>
                <button onClick={clickSingUp}>Sing Up</button>
            </div>

            <CurrentForm ok={ok} />
        </>
    )
}

export default Authorization
