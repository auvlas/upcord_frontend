import { useEffect, useState, JSX } from "react"
import type { StateField, InputEvent } from "./types"

import "./style.css"
import selected from "./../selected"


export default function SignIn({ ok }: { ok: () => void }): JSX.Element {
    const [userName, setUserName]: StateField = useState("")
    const [password, setPassword]: StateField = useState("")

    useEffect((): void => {
        window.history.pushState(null, "", "/signin")
    }, [])

    const handleSubmit: (InputEvent) => void
            = (event: InputEvent): void => {
        event.preventDefault()
        
        ok()
    }

    return (
        <>
            <form className="sign signin" onSubmit={handleSubmit}>
                <div className="sign scrolled signin">
                    <a className="sign logo signin"
                        href="/"
                        onFocus={selected.upcord}
                        onBlur={selected.unselected}
                    >
                        <img
                            className="sign logo signin"
                            src="/upcord1.svg"
                        />

                        <h1 className="sign logo signin">
                            upcord
                        </h1>
                    </a>

                    <a className="sign login-acount signup"
                        href="/signin"
                        onFocus={selected.createAcount}
                        onBlur={selected.unselected}
                    >
                        Login your acount
                    </a>

                    <div className="sign signin inputs">
                        <div className="sign signin input">
                            <i className="bi bi-person sign icon signin"></i>

                            <input
                                type="text"
                                value={userName}
                                className="sign signin"
                                onChange={(event: InputEvent) => setUserName(event.target.value)}
                                onFocus={selected.username}
                                onBlur={selected.unselected}
                                placeholder="Input user name"
                                required/>
                        </div>

                        <div className="sign signin input">
                            <i className="bi bi-key sign icon signin"></i>

                            <input
                                type="password"
                                value={password}
                                className="sign signin"
                                onChange={(event: InputEvent) => setPassword(event.target.value)}
                                onFocus={selected.password}
                                onBlur={selected.unselected}
                                placeholder="Input password"
                                required/>
                        </div>
                    </div>
                </div>

                <button
                    className="sign confirm signin"
                    type="submit"
                    onFocus={selected.confirm}
                    onBlur={selected.unselected}
                >
                    <i className="bi bi-person-check-fill sign confirm signin"></i>
                    Confirm
                </button>
            </form>
        </>
    )
}
