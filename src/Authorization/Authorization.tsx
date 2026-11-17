import {
    Dispatch, SetStateAction, useState,
    useEffect, JSX
} from "react"
import SignIn from "./Sign/SignIn"
import SignUp from "./Sign/SignUp"
import type {
    SignForm, StateSingForm
} from "./types"
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import selected from "./selected"

import translationRU from './../../public/locales/ru/sign.json';
import translationEN from './../../public/locales/en/sign.json';

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

    return (
        <>
            <div className={`authorization head ${isTouch ? "mobile" : "desktop" }`}>
                <button 
                    className={`authorization signin ${ Form === SignIn ? "active" : "unactive" }`} 
                    onClick={signin}
                    onFocus={selected.signin}
                    onBlur={selected.unselected}
                >
                    <i className="bi bi-person authorization icon signin"/>
                    Sign In
                </button>

                <button 
                    className={`authorization signup ${ Form === SignUp ? "active" : "unactive" }`} 
                    onClick={signup}
                    onFocus={selected.signup}
                    onBlur={selected.unselected}
                >
                    <i className="bi bi-person-plus authorization icon signup"/>
                    Sign Up
                </button>
            </div>

            <Form ok={ok} />
        </>
    )
}
