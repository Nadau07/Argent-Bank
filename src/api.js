const baseUrl = "http://localhost:3001/api/v1"

async function LoginAccess(){
    const response = await fetch(`${baseUrl}user/login`)
    const data = await response.json();
    console.log(data)
    return data
}

LoginAccess()