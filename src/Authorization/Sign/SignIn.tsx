import { useEffect, useState, JSX } from "react"
import type { StateField, InputEvent } from "#src/Authorization/Sign/types"
import selected from "#src/Authorization/selected"
import { useTranslation } from "react-i18next"

import "#src/Authorization/Sign/style.css"


export default function SignIn({ ok }: { ok: () => void }): JSX.Element {
    const [userName, setUserName]: StateField = useState("")
    const [password, setPassword]: StateField = useState("")

    const { t, i18n } = useTranslation()

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
                            src="/favicon.svg"
                        />

                        <h1 className="sign logo signin">
                            {t("upcord")}
                        </h1>
                    </a>

                    <a className="sign login-acount signup"
                        href="/signin"
                        onFocus={selected.createAcount}
                        onBlur={selected.unselected}
                    >
                        {t("login_your_acount")}
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
                                placeholder={t("input_user_name")}
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
                                placeholder={t("input_password")}
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
                    {t("confirm")}
                </button>
            </form>
        </>
    )
}
