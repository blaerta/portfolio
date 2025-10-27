async function fetchProfileData() {
    try {
    const response = await fetch('../profile.json');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Data fetched: ', data);
    return data;
}   catch (error) {
    console.error('Fetch error: ', error.message);
    return null;
}
}

function updateProfileInfo (profileData) {
    const photo = document.getElementById('profile.photo');
    console.log(photo)
    photo.src = profileData.photo;
    photo.alt = profileData.name;

    const name = document.getElementById('profile.name');
    name.innerText = profileData.name;
    
    const job = document.getElementById('profile.job');
    job.innerText = profileData.job;
    
    const location = document.getElementById('profile.location');
    location.innerText = profileData.location;
    
    const phone = document.getElementById('profile.phone');
    phone.innerText = profileData.phone;
    phone.href = `tel:${profileData.phone}`;
    
    const email = document.getElementById('profile.email');
    email.innerText = profileData.email;
    email.href = `mailto:${profileData.email}`;

}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills');

    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('');
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills');
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('');
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('');
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio');
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
            <li>
                <span ${project.github ? 'class="title github"' : ''}>${project.name}</span>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
            `

    }).join('')
}

function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('profile.professionalExperience');
    professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
    return `    <span class="title">${experience.name}</span>
                <span class="period">${experience.period}</span>
                    <ul>
                        ${experience.description.map(item => `<li>${item}</li>`).join('')}
                </ul>
                `;
    }).join('')
}

(async () => {
    try {
    const profileData = await fetchProfileData();
    if (!profileData) {
        console.error ('No profile data loaded.');
        return;
    }
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateLanguages(profileData);
    updatePortfolio(profileData);
    updateProfessionalExperience(profileData);
    } catch (error) {
        console.error('Error in main script: ', error);
    }
})()

  console.log('Test: JS is running on GitHub Pages');
  async function fetchProfileData() {
    try {
      console.log('Attempting to fetch /data/profile.json');
      const response = await fetch('/../profile.json');
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      console.log('Data fetched:', data);
      return data;
    } catch (error) {
      console.error('Fetch error:', error.message);
      return null;
    }
  }
  (async () => {
    console.log('Main script starting');
    const profileData = await fetchProfileData();
    if (!profileData) console.error('No profile data loaded.');
  })();