import { useTranslation } from "react-i18next"


function DirectMessage() {
    const { t, i18n } = useTranslation()

    return (
        <>
            <button className="direct-message">
                <img className="direct-message" src="/favicon.svg"/>
                {t("direct_message")}
            </button>
        </>
    )
}

export default DirectMessage
