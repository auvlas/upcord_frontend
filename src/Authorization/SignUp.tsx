import { useState, FormEvent } from "react"

import "./Authorization.css"


function SignUp({ ok }: { ok: () => void }) {
    const [visibleName, setVisibleName] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [secondName, setSecondName] = useState("")
    const [fatherName, setFatherName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()

        console.log("New account: ", { visibleName, userName, password,
                firstName, secondName, fatherName, email, phone })

        ok()
    }

    return (
        <>
            <form className="sign" onSubmit={handleSubmit}>
                <h2>Sing Up</h2>

                <label className="form-label">
                    Visible name:
                    <input 
                        type="text" 
                        value={visibleName}
                        onChange={(event) => setVisibleName(event.target.value)} 
                        placeholder="Input visible name"
                        required
                    />
                </label>

                <label className="form-label">
                    User name:
                    <input 
                        type="text" 
                        value={userName}
                        onChange={(event) => setUserName(event.target.value)} 
                        placeholder="Input user name"
                        required
                    />
                </label>

                <label className="form-label">
                    Password:
                    <input 
                        type="password" 
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} 
                        placeholder="Input password"
                        required
                    />
                </label>

                <label className="form-label">
                    First name:
                    <input 
                        type="text" 
                        value={firstName}
                        onChange={(event) => setUsername(event.target.value)} 
                        placeholder="Input first name"
                    />
                </label>

                <label className="form-label">
                    Second name:
                    <input 
                        type="text" 
                        value={secondName}
                        onChange={(event) => setUserName(e.target.value)} 
                        placeholder="Input second name"
                    />
                </label>

                <label className="form-label">
                    Email:
                    <input 
                        type="email" 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} 
                        placeholder="Input email"
                    />
                </label>

                <label className="form-label">
                    Phone:
                    <input 
                        type="tel" 
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)} 
                        placeholder="Input phone"
                    />
                </label>

                <button className="submit-btn" type="submit">Confirm</button>
            </form>
        </>
    )
}

export default SignUp
