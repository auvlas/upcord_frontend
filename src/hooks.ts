import { useState } from 'react'

type StateBoolean = [boolean, Dispatch<SetStateAction<boolean>>]
type StateTouchScreen = StateBoolean

export function useTouchScreen(): boolean {
    const [isTouch]: StateBoolean = useState<boolean>((): boolean => {
        if (typeof window === 'undefined') return false
        
        const hasTouchStart: boolean = 'ontouchstart' in window
        const hasTouchPoints: boolean = typeof navigator !== 'undefined' && 
                typeof navigator.maxTouchPoints === 'number' && 
                navigator.maxTouchPoints > 0
            
        return hasTouchStart || hasTouchPoints
    })

    return isTouch
}
