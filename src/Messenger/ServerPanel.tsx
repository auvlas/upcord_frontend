import DirectMessage from "./DirectMessage"
import Space from "./Space"
import ServerArray from "./ServerArray"
import Profile from "./Profile"
import useTouchScreen from "./../hooks"


function ServerPanel() {
    const isTouch: boolean = useTouchScreen()

    return (
        <>
            <div className={`server-bar ${isTouch ? "mobile" : "desktop"}`}>
                <div className="server panel">
                    <DirectMessage/>
                </div>
                <ServerArray/>
                <div className="server panel">
                    <Profile/>
                </div>
            </div>
        </>
    )
}

export default ServerPanel
