
type dataInterface = {
  email: string,
  password: string
}
export default function request(data: dataInterface) {
  const headerDetails = {
    'Content-Type': 'application/json',
    // 'x-api-key': getApiKey(),
  };
  return fetch("https://sig-staging-api-a4c37da3d933.herokuapp.com/auth/login", {
    method: "POST",
    headers: headerDetails,
    body: JSON.stringify(data)
  })
}