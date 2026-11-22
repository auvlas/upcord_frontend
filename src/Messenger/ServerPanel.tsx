import DirectMessage from "./DirectMessage"
import ServerArray from "./ServerArray"
import Profile from "./Profile"
import useTouchScreen from "./../hooks"


function ServerPanel() {
    const isTouch: boolean = useTouchScreen()

    return (
        <>
            <div className={`server panel ${isTouch ? "mobile" : "desktop"}`}>
                <DirectMessage/>
                <ServerArray/>
                <div className="control mute">
                    <button className="mic mute">
                        <i className="bi bi-mic-mute icon mute"/>
                    </button>
                </div>
                <div className="control mute">
                    <button className="volume mute">
                        <i className="bi bi-volume-mute icon mute"/>
                    </button>
                </div>
                <Profile/>
            </div>
        </>
    )
}

export default ServerPanel
