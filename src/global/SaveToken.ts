
export const getToken = (function() {
    const token = localStorage.getItem("Foody-app-token")
    if(!token) return ""
    return token
})()

export function saveToken(value:any) {
    localStorage.setItem("Foody-app-token",value)
    return value;
}

