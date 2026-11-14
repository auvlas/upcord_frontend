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
            <div className="sign">
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

                <form className="sign" onSubmit={handleSubmit}>
                    <label className="sign">
                        <span className="sign required">*</span>User name
                    </label>
                    <input
                        type="text"
                        value={userName}
                        className="sign"
                        onChange={(event: InputEvent) => setUserName(event.target.value)}
                        onFocus={selected.username}
                        onBlur={selected.unselected}
                        placeholder="Input user name"
                        required
                    />

                    <label className="sign">
                        <span className="sign required">*</span>Password
                    </label>
                    <input
                        type="password"
                        value={password}
                        className="sign"
                        onChange={(event: InputEvent) => setPassword(event.target.value)}
                        onFocus={selected.password}
                        onBlur={selected.unselected}
                        placeholder="Input password"
                        required
                    />

                    <button
                        className="sign confirm"
                        type="submit"
                        onFocus={selected.confirm}
                        onBlur={selected.unselected}
                    >
                        Confirm
                    </button>
                </form>
            </div>
        </>
    )
}
