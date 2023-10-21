const baseUrl = "http://localhost:3001/api/v1"




//API for Login (gestion de la connexion de l'utilisateur )
export async function LoginAccess(){
    const user={
        email: "string",
        password: "string"
    }
    const response = await fetch(`${baseUrl}user/login`, {
        method:"POST",
        headers : {
            'Content-Type' : 'application/json',

        },
        body: JSON.stringify(user)
    })
    return response
    }

/**API for fetching a user profile
async function UserProfil(){
    const response = await fetch(`${baseUrl}user/profile`,{
        method:"POST",
        headers : {
            'Content-Type' : 'application/json',
            Authorization: 'Bearer ' + token,
        }
    })
    return response
}
**/

