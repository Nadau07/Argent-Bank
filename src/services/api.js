const baseUrl = "http://localhost:3001/api/v1"



async function LoginAccess(){
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
LoginAccess();