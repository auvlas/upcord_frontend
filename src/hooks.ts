import { useState, useEffect } from 'react'


type StateBoolean = [boolean, Dispatch<SetStateAction<boolean>>]
type StateTouchScreen = StateBoolean

function useTouchScreen(): boolean {
    const [isTouch, setIsTouch] = useState(false)

    useEffect(() => {
        const checkTouch = () => {
            setIsTouch(
                'ontouchstart' in window ||
                navigator.maxTouchPoints > 0 ||
                window.matchMedia('(pointer: coarse)').matches
            )
        }

        checkTouch()
    }, [])

    return isTouch
}

export default useTouchScreen
