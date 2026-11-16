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
                <form className="sign" onSubmit={handleSubmit}>
                    <label className="sign signin">
                        User name
                    </label>
                    <input
                        type="text"
                        value={userName}
                        className="sign signin"
                        onChange={(event: InputEvent) => setUserName(event.target.value)}
                        onFocus={selected.username}
                        onBlur={selected.unselected}
                        placeholder="Input user name"
                        required
                    />

                    <label className="sign signin">
                        Password
                    </label>
                    <input
                        type="password"
                        value={password}
                        className="sign signin"
                        onChange={(event: InputEvent) => setPassword(event.target.value)}
                        onFocus={selected.password}
                        onBlur={selected.unselected}
                        placeholder="Input password"
                        required
                    />

                    <button
                        className="sign confirm signin"
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
