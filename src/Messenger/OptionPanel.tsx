import { useTranslation } from "react-i18next"


function OptionPanel() {
    const { t, i18n } = useTranslation()

    return (
        <>
            <div className="panel option">
                <div className="header option">
                    <button className="header option member active">
                        <i className="bi bi-people icon header option member"/>
                        {t("tab_member")}
                    </button>
                    <button className="header option emoji">
                        <i className="bi bi-emoji-smile icon header option emoji"/>
                        {t("tab_emoji")}
                    </button>
                    <button className="header option sticker">
                        <i className="bi bi-car-front icon header option sticker"/>
                        {t("tab_sticker")}
                    </button>
                    <button className="header option gif">
                        <i className="bi bi-filetype-gif icon header option gif"/>
                        {t("tab_gif")}
                    </button>
                </div>
            </div>
        </>
    )
}

export default OptionPanel
