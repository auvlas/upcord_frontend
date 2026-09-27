import { useState, JSX } from "react"
import type { StateField, InputEvent } from "./types"

import "./style.css"


export default function SignUp({ ok }: { ok: () => void }): JSX.Element {
    const [visibleName, setVisibleName]: StateField = useState("")
    const [userName, setUserName]: StateField = useState("")
    const [password, setPassword]: StateField = useState("")
    const [firstName, setFirstName]: StateField = useState("")
    const [secondName, setSecondName]: StateField = useState("")
    const [fatherName, setFatherName]: StateField = useState("")
    const [email, setEmail]: StateField = useState("")
    const [phone, setPhone]: StateField = useState("")

    const handleSubmit: (InputEvent) => void
            = (event: InputEvent): void => {
        event.preventDefault()
        
        ok()
    }

    return (
        <>
            <form className="sign" onSubmit={handleSubmit}>
                <h2 className="sign">Sing Up</h2>

                <label className="sign">
                    Visible name:
                    <input 
                        type="text" 
                        value={visibleName}
                        className="sign"
                        onChange={(event: InputEvent) => setVisibleName(event.target.value)} 
                        placeholder="Input visible name"
                        required
                    />
                </label>

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

                <label className="sign">
                    First name:
                    <input 
                        type="text" 
                        value={firstName}
                        className="sign"
                        onChange={(event: InputEvent) => setFirstName(event.target.value)} 
                        placeholder="Input first name"
                    />
                </label>

                <label className="sign">
                    Second name:
                    <input 
                        type="text" 
                        value={secondName}
                        className="sign"
                        onChange={(event: InputEvent) => setSecondName(event.target.value)} 
                        placeholder="Input second name"
                    />
                </label>

                <label className="sign">
                    Father name:
                    <input 
                        type="text" 
                        value={fatherName}
                        className="sign"
                        onChange={(event: InputEvent) => setFatherName(event.target.value)} 
                        placeholder="Input father name"
                    />
                </label>

                <label className="sign">
                    Email:
                    <input 
                        type="email" 
                        value={email}
                        className="sign"
                        onChange={(event: InputEvent) => setEmail(event.target.value)} 
                        placeholder="Input email"
                    />
                </label>

                <label className="sign">
                    Phone:
                    <input 
                        type="tel" 
                        value={phone}
                        className="sign"
                        onChange={(event: InputEvent) => setPhone(event.target.value)} 
                        placeholder="Input phone"
                    />
                </label>

                <button className="sign" type="submit">Confirm</button>
            </form>
        </>
    )
}
