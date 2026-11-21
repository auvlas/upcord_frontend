import { useEffect } from "react"
import ServerPanel from "./ServerPanel"
import ChatPanel from "./ChatPanel"
import MessagePanel from "./MessagePanel"
import MemberPanel from "./MemberPanel"
import Space from "./Space"
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
            <div className="panel main">
                <ChatPanel/>
                <Space type="vertical"/>
                <MessagePanel/>
                <Space type="vertical"/>
                <MemberPanel/>
            </div>
        </>
    )
}

export default Messenger
