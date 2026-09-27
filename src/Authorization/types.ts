import SignIn from "./Sign/SignIn"
import SignUp from "./Sign/SignUp"


export type SignForm = typeof SignIn | typeof SignUp
export type StateSingForm = [
        SignForm, Dispatch<SetStateAction<SignForm>>
]
