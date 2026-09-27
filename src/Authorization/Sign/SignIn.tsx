import { useState, JSX } from "react"
import type { StateField, InputEvent } from "./types"

import "./style.css"


export default function SignIn({ ok }: { ok: () => void }): JSX.Element {
    const [userName, setUserName]: StateField = useState("")
    const [password, setPassword]: StateField = useState("")

    const handleSubmit: (InputEvent) => void
            = (event: InputEvent): void => {
        event.preventDefault()
        
        ok()
    }

    return (
        <>
            <form className="sign" onSubmit={handleSubmit}>
                <h2 className="sign">Sing In</h2>

                <label className="sign">
                    User name:
                    <input
                        type="text"
                        value={userName}
                        className="sign"
                        onChange={(event: InputEvent) => setUserName(event.target.value)}
                        placeholder="Input user name"
                        required
                    />
                </label>

                <label className="sign">
                    Password:
                    <input
                        type="password"
                        value={password}
                        className="sign"
                        onChange={(event: InputEvent) => setPassword(event.target.value)}
                        placeholder="Input password"
                        required
                    />
                </label>

                <button className="sign" type="submit">Confirm</button>
            </form>
        </>
    )
}
