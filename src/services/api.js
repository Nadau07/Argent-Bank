const baseUrl = "http://localhost:3001/api/v1"


async function fetchData(url, method, headers, body) {
  const response = await fetch(`${baseUrl}${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      ...headers,
    },
    body: JSON.stringify(body),
  });

  return response;
}

//Obtenir le token
export async function AccessToken(email, password) {
  const user = { email, password };
  return fetchData('/user/login', 'POST', {}, user);
}

//Obtenir le profil user avec le token
export async function GetProfile(token) {
  return fetchData('/user/profile', 'POST', { Authorization: `Bearer ${token}` });
}


export async function GetToken(email, password) {
  const response = await AccessToken(email, password);
  const { token } = await response.json();
  return token;
}
//Extraire les données du profil user
export async function ProfileData(token) {
  const response = await GetProfile(token);
  const responseBody = await response.json();
  const userName = responseBody.body.userName;
  const firstName = responseBody.body.firstName;
  const lastName = responseBody.body.lastName;

  return { userName, firstName, lastName };
}
//Mettre à jour le profil user 
export async function ChangeUser(token, newUserName) {
  const userName = { userName: newUserName };
  return fetchData('/user/profile', 'PUT', { Authorization: `Bearer ${token}` }, userName);
}
