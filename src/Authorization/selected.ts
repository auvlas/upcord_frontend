function unselected() {
    window.history.replaceState(
            null, "", window.location.pathname)
}

function selected(selectItem: string): void {
    window.history.replaceState(
            null, "", window.location.pathname + selectItem)
}

function upcord(): void {
    selected("#upcord")
}

function createAcount(): void {
    selected("#create_acount")
}

function visiblename(): void {
    selected("#visiblename")
}

function username(): void {
    selected("#username")
}

function password(): void {
    selected("#password")
}

function confirmPassword(): void {
    selected("#confirm_password")
}

function firstname(): void {
    selected("#firstname")
}

function secondname(): void {
    selected("#secondname")
}

function fathername(): void {
    selected("#fathername")
}

function email(): void {
    selected("#email")
}

function phone(): void {
    selected("#phone")
}

function confirm(): void {
    selected("#confirm")
}

function signin(): void {
    selected("#signin")
}

function signup(): void {
    selected("#signup")
}

export default {
    unselected,
    selected,
    upcord,
    createAcount,
    visiblename,
    username,
    password,
    confirmPassword,
    firstname,
    secondname,
    fathername,
    email,
    phone,
    confirm,
    signin,
    signup
}
