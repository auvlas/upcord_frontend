import { useTranslation } from "react-i18next"


function ChatPanel() {
    const { t, i18n } = useTranslation()

    return (
        <>
            <div className="chat panel">
                <div className="header chat">
                    <button className="header chat">
                        <i className="bi bi-layers icon header chat"/>
                        {t("server_name")}
                    </button>
                </div>
            </div>
        </>
    )
}

export default ChatPanel
