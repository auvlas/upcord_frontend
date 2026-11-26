import SignIn from "#src/Authorization/Sign/SignIn"
import SignUp from "#src/Authorization/Sign/SignUp"


export type SignForm = typeof SignIn | typeof SignUp
export type StateSingForm = [
        SignForm, Dispatch<SetStateAction<SignForm>>
]
