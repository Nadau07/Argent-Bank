//URL API: "http://localhost:3001/api/v1"

export async function Login(email, password) {
  let user = {
    email: email,
    password: password,
  };
  let response = await fetch(`http://localhost:3001/api/v1/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
  });
  return response.json();
}

export async function token(email, password) {
  const response = await Login(email, password);
  const token = response.body.token;
  localStorage.setItem("token", token);
  return token;
}

export async function Profile(token) {
  let response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  return response;
}

export async function ProfileData(token) {
  const response = await Profile(token);
  const newresponse = await response.json();
  return newresponse.body;
}

export async function userName(token) {
  const profileData = await ProfileData(token);
  const userName = profileData.userName;
  localStorage.setItem("userName", userName);
  return userName;
}

export async function firstName(token) {
  const profileData = await ProfileData(token);
  const firstName = profileData.firstName;
  localStorage.setItem("firstName", firstName);
  return firstName;
}

export async function lastName(token) {
  const profileData = await ProfileData(token);
  const lastName = profileData.lastName;
  localStorage.setItem("lastName", lastName);
  return lastName;
}

export async function EditProfile(token, NewProfile) {
  let profile = {
    userName: NewProfile,
  };

  let response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(profile),
  });
  return response;
}
