export const writeToken = (token:string) => {
    console.log(token)
    localStorage.setItem("token",token);
    console.log(localStorage.getItem("token"))
}