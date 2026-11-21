import {
    Dispatch, SetStateAction, useState,
    useEffect, JSX
} from "react"
import SignIn from "./Sign/SignIn"
import SignUp from "./Sign/SignUp"
import type {
    SignForm, StateSingForm
} from "./types"
import selected from "./selected"
import { useTranslation } from "react-i18next"

import "./style.css"


export default Authorization

function Authorization({ isTouch, sign, ok }: {
    isTouch: boolean,
    sign: SignForm,
    ok: () => void
}): JSX.Element {
    const [Form, setForm]: StateSingForm = useState<SignForm>((): SignForm => sign)

    const signin: () => void = (): void => setForm((): SignForm => SignIn)
    const signup: () => void = (): void => setForm((): SignForm => SignUp)

    const { t, i18n } = useTranslation()

    useEffect((): void => {
        document.body.className = "authorization"
    })

    return (
        <>
            <div className={`authorization head ${isTouch ? "mobile" : "desktop"}`}>
                <div className={`authorization head-sign ${isTouch ? "mobile" : "desktop"}`}>
                    <button 
                        className={`authorization signin ${Form === SignIn ? "active" : "unactive"}`} 
                        onClick={signin}
                        onFocus={selected.signin}
                        onBlur={selected.unselected}
                    >
                        <i className="bi bi-person authorization icon signin"/>
                        {t("signin")}
                    </button>

                    <button 
                        className={`authorization signup ${Form === SignUp ? "active" : "unactive"}`} 
                        onClick={signup}
                        onFocus={selected.signup}
                        onBlur={selected.unselected}
                    >
                        <i className="bi bi-person-plus authorization icon signup"/>
                        {t("signup")}
                    </button>
                </div>

                <button 
                    className={`authorization language ${Form === SignIn ? "signin" : "signup"}`} 
                    onClick={(): void => {i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")}}
                    onFocus={selected.language}
                    onBlur={selected.unselected}
                >
                    <i className="bi bi-globe2 authorization language icon"/>
                    {t(i18n.language === "ru" ? "ru" : "en")}
                </button>
            </div>

            <Form ok={ok} />
        </>
    )
}
