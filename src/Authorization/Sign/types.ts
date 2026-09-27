import type {
    Dispatch, SetStateAction, ChangeEvent
} from "react"

export type InputEvent = ChangeEvent<HTMLInputElement>
export type StateField = [string, Dispatch<SetStateAction<string>>]
