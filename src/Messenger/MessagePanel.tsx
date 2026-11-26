import { useTranslation } from "react-i18next"


function MessagePanel() {
    const { t, i18n } = useTranslation()

    return (
        <>
            <div className="message panel">
                <div className="header message">
                    <button className="header message">
                        <i className="bi bi-layers icon header message"/>
                        {t("chat_name")}
                    </button>
                </div>
            </div>
        </>
    )
}

export default MessagePanel
