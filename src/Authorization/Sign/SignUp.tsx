import { useEffect, useState, JSX } from "react"
import type { StateField, InputEvent } from "#src/Authorization/Sign/types"
import selected from "#src/Authorization/selected"
import { useTranslation } from "react-i18next"

import "#src/Authorization/Sign/style.css"


export default function SignUp({ ok }: { ok: () => void }): JSX.Element {
    const [visibleName, setVisibleName]: StateField = useState("")
    const [userName, setUserName]: StateField = useState("")
    const [password, setPassword]: StateField = useState("")
    const [firstName, setFirstName]: StateField = useState("")
    const [secondName, setSecondName]: StateField = useState("")
    const [fatherName, setFatherName]: StateField = useState("")
    const [email, setEmail]: StateField = useState("")
    const [phone, setPhone]: StateField = useState("")

    const { t, i18n } = useTranslation()

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
            <form className="sign signup" onSubmit={handleSubmit}>
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
                    <a className="sign create-acount signup"
                        href="/signup"
                        onFocus={selected.createAcount}
                        onBlur={selected.unselected}
                    >
                        {t("create_your_acount")}
                    </a>
                    <div className="sign signup inputs">
                        <div className="sign signup input">
                            <i className="bi bi-person sign icon signup"></i>

                            <input 
                                type="text" 
                                value={visibleName}
                                className="sign signup"
                                onChange={(event: InputEvent) => setVisibleName(event.target.value)}
                                onFocus={selected.visiblename}
                                onBlur={selected.unselected}
                                placeholder={t("input_visible_name")}
                                required
                            />
                        </div>

                        <div className="sign signup input">
                            <i className="bi bi-person-check sign icon signup"></i>

                            <input 
                                type="text" 
                                value={userName}
                                className="sign signup"
                                onChange={(event: InputEvent) => setUserName(event.target.value)} 
                                onFocus={selected.username}
                                onBlur={selected.unselected}
                                placeholder={t("input_user_name")}
                                required
                            />
                        </div>

                        <div className="sign signup input">
                            <i className="bi bi-key sign icon signup"></i>

                            <input 
                                type="password" 
                                value={password}
                                className="sign signup"
                                onChange={(event: InputEvent) => setPassword(event.target.value)} 
                                onFocus={selected.password}
                                onBlur={selected.unselected}
                                placeholder={t("input_password")}
                                required
                            />
                        </div>

                        <div className="sign signup input">
                            <i className="bi bi-person-lock sign icon signup"></i>

                            <input 
                                type="password" 
                                value={password}
                                className="sign signup"
                                onChange={(event: InputEvent) => setConfirmPassword(event.target.value)} 
                                onFocus={selected.confirmPassword}
                                onBlur={selected.unselected}
                                placeholder={t("confirm_password")}
                                required/>
                        </div>

                        <div className="sign signup input">
                            <i className="bi bi-person sign icon signup"></i>

                            <input 
                                type="text" 
                                value={firstName}
                                className="sign signup"
                                onChange={(event: InputEvent) => setFirstName(event.target.value)} 
                                onFocus={selected.firstname}
                                onBlur={selected.unselected}
                                placeholder={t("input_first_name")}/>
                        </div>

                        <div className="sign signup input">
                            <i className="bi bi-person-bounding-box sign icon signup"></i>

                            <input 
                                type="text" 
                                value={secondName}
                                className="sign signup"
                                onChange={(event: InputEvent) => setSecondName(event.target.value)} 
                                onFocus={selected.secondname}
                                onBlur={selected.unselected}
                                placeholder={t("input_second_name")}/>
                        </div>

                        <div className="sign signup input">
                            <i className="bi bi-person-vcard sign icon signup"></i>

                            <input 
                                type="text" 
                                value={fatherName}
                                className="sign signup"
                                onChange={(event: InputEvent) => setFatherName(event.target.value)} 
                                onFocus={selected.fathername}
                                onBlur={selected.unselected}
                                placeholder={t("input_father_name")}/>
                        </div>

                        <div className="sign signup input">
                            <i className="bi bi-envelope sign icon signup"></i>

                            <input 
                                type="email" 
                                value={email}
                                className="sign signup"
                                onChange={(event: InputEvent) => setEmail(event.target.value)} 
                                onFocus={selected.email}
                                onBlur={selected.unselected}
                                placeholder={t("input_email")}/>
                        </div>

                        <div className="sign signup input">
                            <i className="bi bi-telephone sign icon signup"></i>

                            <input 
                                type="tel" 
                                value={phone}
                                className="sign signup"
                                onChange={(event: InputEvent) => setPhone(event.target.value)} 
                                onFocus={selected.phone}
                                onBlur={selected.unselected}
                                placeholder={t("input_phone")}/>
                        </div>
                    </div>
                </div>

                <button
                    className="sign confirm signup"
                    type="submit"
                    onFocus={selected.confirm}
                    onBlur={selected.unselected}
                >
                    <i className="bi bi-list-check sign confirm signup"></i>
                    {t("confirm")}
                </button>
            </form>
        </>
    )
}
