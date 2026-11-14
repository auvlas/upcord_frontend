import { useEffect, useState, JSX } from "react"
import type { StateField, InputEvent } from "./types"

import "./style.css"
import selected from "./../selected"


export default function SignUp({ ok }: { ok: () => void }): JSX.Element {
    const [visibleName, setVisibleName]: StateField = useState("")
    const [userName, setUserName]: StateField = useState("")
    const [password, setPassword]: StateField = useState("")
    const [firstName, setFirstName]: StateField = useState("")
    const [secondName, setSecondName]: StateField = useState("")
    const [fatherName, setFatherName]: StateField = useState("")
    const [email, setEmail]: StateField = useState("")
    const [phone, setPhone]: StateField = useState("")

    useEffect((): void => {
        window.history.pushState(null, "", "/signup")
    }, [])

    const handleSubmit: (InputEvent) => void
            = (event: InputEvent): void => {
        event.preventDefault()
        
        ok()
    }

    return (
        <>
            <form className="sign" onSubmit={handleSubmit}>
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

                <label className="sign">
                    Visible name:
                    <input 
                        type="text" 
                        value={visibleName}
                        className="sign"
                        onChange={(event: InputEvent) => setVisibleName(event.target.value)}
                        onFocus={selected.visiblename}
                        onBlur={selected.unselected}
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
                        onFocus={selected.username}
                        onBlur={selected.unselected}
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
                        onFocus={selected.password}
                        onBlur={selected.unselected}
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
                        onFocus={selected.firstname}
                        onBlur={selected.unselected}
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
                        onFocus={selected.secondname}
                        onBlur={selected.unselected}
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
                        onFocus={selected.fathername}
                        onBlur={selected.unselected}
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
                        onFocus={selected.email}
                        onBlur={selected.unselected}
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
                        onFocus={selected.phone}
                        onBlur={selected.unselected}
                        placeholder="Input phone"
                    />
                </label>

                <button
                    className="sign confirm"
                    type="submit"
                    onFocus={selected.confirm}
                    onBlur={selected.unselected}
                >
                    Confirm
                </button>
            </form>
        </>
    )
}
