import DirectMessage from "./DirectMessage"
import ServerArray from "./ServerArray"
import Profile from "./Profile"
import { useTranslation } from "react-i18next"
import useTouchScreen from "./../hooks"


function ServerPanel() {
    const { t, i18n } = useTranslation()
    const isTouch: boolean = useTouchScreen()

    return (
        <>
            <div className={`server panel ${isTouch ? "mobile" : "desktop"}`}>
                <DirectMessage/>
                <ServerArray/>
                <div className="control mute">
                    <button className="control mic mute">
                        <i className="bi bi-mic-mute icon control mute"/>
                    </button>
                </div>
                <div className="control mute">
                    <button className="control volume mute">
                        <i className="bi bi-volume-mute icon control mute"/>
                    </button>
                </div>
                <button className="control setting">
                    <i className="bi bi-gear icon control setting"/>
                    {t("settings")}
                </button>
                <Profile/>
            </div>
        </>
    )
}

export default ServerPanel
