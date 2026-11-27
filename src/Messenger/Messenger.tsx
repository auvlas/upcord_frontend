import { useEffect } from "react"
import ServerPanel from "#src/Messenger/ServerPanel"
import ChatPanel from "#src/Messenger/ChatPanel"
import MessagePanel from "#src/Messenger/MessagePanel"
import OptionPanel from "#src/Messenger/OptionPanel"
import SenderPanel from "#src/Messenger/SenderPanel"
import { useTouchScreen } from "#src/hooks"

import "#src/Messenger/style.css"


function Messenger() {
    const isTouch: boolean = useTouchScreen()

    useEffect((): void => {
        document.body.className = "messenger "
                + (isTouch ? "mobile" : "desktop")
    })

    return (
        <>
            <ServerPanel/>
            <div className="panel main vertical">
                <div className="panel main horisontal">
                    <ChatPanel/>
                    <MessagePanel/>
                    <OptionPanel/>
                </div>
                <SenderPanel/>
            </div>
        </>
    )
}

export default Messenger
