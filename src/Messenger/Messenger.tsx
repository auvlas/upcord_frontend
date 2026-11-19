import { useEffect } from "react"
import ServersPanel from "./ServerPanel"

import "./style.css"

function Messenger() {
    useEffect((): void => {
        document.body.className = "messenger"
    })

    return (
        <>
            <ServersPanel/>
        </>
    )
}

export default Messenger
