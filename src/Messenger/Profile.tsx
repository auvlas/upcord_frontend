import { useTranslation } from "react-i18next"


function Profile() {
    const { t, i18n } = useTranslation()

    return (
        <>
            <button className="profile">
                <i className="bi bi-person-gear profile icon"/>
                {t("your_profile")}
            </button>
        </>
    )
}

export default Profile
