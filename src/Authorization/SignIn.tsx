import { useState, FormEvent } from "react"

import "./SignIn.css"


function SignIn({ ok }: { ok: () => void }) {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()

        console.log("Access data: ", { userName, password })

        ok()
    };

    return (
        <>
            <form className="signin-form" onSubmit={handleSubmit}>
                <h2>Sing In</h2>

                <label>
                    User name:
                    <input 
                        type="text" 
                        value={userName}
                        onChange={(event) => setUserName(event.target.value)} 
                        placeholder="Input user name"
                        required
                    />
                </label>

                <label>
                    Password:
                    <input 
                        type="password" 
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} 
                        placeholder="Input password"
                        required
                    />
                </label>

                <button type="submit">Confirm</button>
            </form>
        </>
    )
}

export default SignIn
