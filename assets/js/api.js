async function fetchProfileData() {
    const url = 
    'https://raw.githubusercontent.com/Gleicianegaldino/Desafio-Developer-Portfolio/main/dados/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}

