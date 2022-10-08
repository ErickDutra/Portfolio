
function updateProfileInfo(profileData){
    const name = document.getElementById('profile.nome')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location
    
    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href =`tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`

}



(async () =>{
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
})()