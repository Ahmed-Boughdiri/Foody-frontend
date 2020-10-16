
export const getToken = (function() {
    const token = localStorage.getItem("Foody-app-token")
    if(!token) return ""
    return token
})()

export async function saveToken(value:any) {
    await localStorage.setItem("Foody-app-token",value)
    return value;
}

export async function deleteToken() {
    await localStorage.removeItem("Foody-app-token")
}

