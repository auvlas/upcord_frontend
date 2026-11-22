import { useEffect } from "react"
import ServerPanel from "./ServerPanel"
import ChatPanel from "./ChatPanel"
import MessagePanel from "./MessagePanel"
import OptionPanel from "./OptionPanel"
import SenderPanel from "./SenderPanel"
import useTouchScreen from "./../hooks"

import "./style.css"


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
