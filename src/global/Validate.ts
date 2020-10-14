
// eslint-disable-next-line no-control-regex
const emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
const usernamePattern = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/

export default function(username:String,email:String,password:String):(String|Boolean){
    if(!(email.match(emailPattern))){
        return "Your Email is Invalid"
    } else if(!(username.match(usernamePattern))) {
        return "Your Username is Invalid"
    } else if(password.length < 8) {
        return "Your Password Must Contain At Least 8 Chars"
    }
    return false
}
