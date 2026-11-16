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
            <div className="sign scrolled signup">
                <a className="sign logo signup"
                    href="/"
                    onFocus={selected.upcord}
                    onBlur={selected.unselected}
                >
                    <img
                        className="sign logo signup"
                        src="/upcord3.svg"
                    />

                    <h1 className="sign logo signup">
                        upcord
                    </h1>
                </a>
                <form className="sign" onSubmit={handleSubmit}>
                    <label className="sign signup">
                        <span className="sign required">*</span>Visible name
                    </label>
                    <input 
                        type="text" 
                        value={visibleName}
                        className="sign signup"
                        onChange={(event: InputEvent) => setVisibleName(event.target.value)}
                        onFocus={selected.visiblename}
                        onBlur={selected.unselected}
                        placeholder="Input visible name"
                        required
                    />

                    <label className="sign signup">
                        <span className="sign required">*</span>User name
                    </label>
                    <input 
                        type="text" 
                        value={userName}
                        className="sign signup"
                        onChange={(event: InputEvent) => setUserName(event.target.value)} 
                        onFocus={selected.username}
                        onBlur={selected.unselected}
                        placeholder="Input user name"
                        required
                    />

                    <label className="sign signup">
                        <span className="sign required">*</span>Password
                    </label>
                    <input 
                        type="password" 
                        value={password}
                        className="sign signup"
                        onChange={(event: InputEvent) => setPassword(event.target.value)} 
                        onFocus={selected.password}
                        onBlur={selected.unselected}
                        placeholder="Input password"
                        required
                    />

                    <label className="sign signup">
                        First name
                    </label>
                    <input 
                        type="text" 
                        value={firstName}
                        className="sign signup"
                        onChange={(event: InputEvent) => setFirstName(event.target.value)} 
                        onFocus={selected.firstname}
                        onBlur={selected.unselected}
                        placeholder="Input first name"
                    />

                    <label className="sign signup">
                        Second name
                    </label>
                    <input 
                        type="text" 
                        value={secondName}
                        className="sign signup"
                        onChange={(event: InputEvent) => setSecondName(event.target.value)} 
                        onFocus={selected.secondname}
                        onBlur={selected.unselected}
                        placeholder="Input second name"
                    />

                    <label className="sign signup">
                        Father name
                    </label>
                    <input 
                        type="text" 
                        value={fatherName}
                        className="sign signup"
                        onChange={(event: InputEvent) => setFatherName(event.target.value)} 
                        onFocus={selected.fathername}
                        onBlur={selected.unselected}
                        placeholder="Input father name"
                    />

                    <label className="sign signup">
                        Email
                    </label>
                    <input 
                        type="email" 
                        value={email}
                        className="sign signup"
                        onChange={(event: InputEvent) => setEmail(event.target.value)} 
                        onFocus={selected.email}
                        onBlur={selected.unselected}
                        placeholder="Input email"
                    />

                    <label className="sign signup">
                        Phone
                    </label>
                    <input 
                        type="tel" 
                        value={phone}
                        className="sign signup"
                        onChange={(event: InputEvent) => setPhone(event.target.value)} 
                        onFocus={selected.phone}
                        onBlur={selected.unselected}
                        placeholder="Input phone"
                    />

                    <button
                        className="sign confirm signup"
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
