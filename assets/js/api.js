

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/ErickDutra/js-developer-portfolio/main/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.jason 
}