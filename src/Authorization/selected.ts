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

function visiblename(): void {
    selected("#visiblename")
}

function username(): void {
    selected("#username")
}

function password(): void {
    selected("#password")
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
    visiblename,
    username,
    password,
    firstname,
    secondname,
    fathername,
    email,
    phone,
    confirm,
    signin,
    signup
}
