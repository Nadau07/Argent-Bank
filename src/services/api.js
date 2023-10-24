//URL API: "http://localhost:3001/api/v1"


//REQUETE POST USER LOGIN : permet à un user de se connecter à son compte .

export async function Login(email, password) {
  let user = {
    email: email,
    password: password,
  };
  let response = await fetch(`http://localhost:3001/api/v1/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(user),
  });
  console.log(response)
  return response.json();

}

//RECUPERATION DU TOKEN :

export async function token(email, password) {
  console.log(email,password)
  const response = await Login(email, password);
  const token = response.body.token;
  localStorage.setItem('token', token);
  console.log(token)
  return token;
}

//REQUETE POST USER PROFILE : permet de récupérer les informations d'un profil user.

export async function Profile(token) {
  console.log(token)
  let response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
  return response;
}

//RECUPERATION DES INFORMATIONS DE L'USER GRACE AU TOKEN :

export async function ProfileData(token) {
  const response = await Profile(token);
  const newresponse = await response.json();
  return newresponse.body;
}

export async function userName(token) {
  const profileData = await ProfileData(token);
  const userName = profileData.userName;
  localStorage.setItem('userName', userName);
  return userName;
}

export async function firstName(token) {
  const profileData = await ProfileData(token);
  const firstName = profileData.firstName;
  localStorage.setItem('firstName', firstName);
  return firstName;
}

export async function lastName(token) {
  const profileData = await ProfileData(token);
  const lastName = profileData.lastName;
  localStorage.setItem('lastName', lastName);
  return lastName;
}

//REQUETE PUT PROFILE : permet à un user de mettre à jour son propre profil .

export async function EditProfile (token, NewProfile) {
  let profile = {
    profile: NewProfile,
  };

  let response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(profile),
  });
  return response;
}