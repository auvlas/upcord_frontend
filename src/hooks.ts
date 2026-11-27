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

function useHash(): string {
    const [hash, setHash] = useState<string>(() => 
        typeof location !== 'undefined' ? location.hash.slice(1) : ''
    )

    useEffect(() => {
        const handleHashChange = () => {
            setHash(location.hash.slice(1))
        }

        window.addEventListener('hashchange', handleHashChange)
        return () => {
            window.removeEventListener('hashchange', handleHashChange)
        }
    }, [])

    return hash
}

export {
        useTouchScreen,
        useHash
}
