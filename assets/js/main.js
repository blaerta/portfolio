// Log to confirm JS is running
console.log('Test: JS is running on GitHub Pages');

// Fetch profile data with correct path for GitHub Pages
async function fetchProfileData() {
  try {
    console.log('Attempting to fetch /data/profile.json');
    const response = await fetch('data/profile.json'); // Absolute path from root
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Data fetched:', data);
    return data;
  } catch (error) {
    console.error('Fetch error:', error.message);
    return null;
  }
}

// Update profile information
function updateProfileInfo(profileData) {
  const photo = document.getElementById('profile.photo');
  console.log('Photo element:', photo); // Debug log
  if (photo) {
    photo.src = profileData.photo;
    photo.alt = profileData.name;
  }

  const name = document.getElementById('profile.name');
  if (name) name.innerText = profileData.name;

  const job = document.getElementById('profile.job');
  if (job) job.innerText = profileData.job;

  const location = document.getElementById('profile.location');
  if (location) location.innerText = profileData.location;

  const phone = document.getElementById('profile.phone');
  if (phone) {
    phone.innerText = profileData.phone;
    phone.href = `tel:${profileData.phone}`;
  }

  const email = document.getElementById('profile.email');
  if (email) {
    email.innerText = profileData.email;
    email.href = `mailto:${profileData.email}`;
  }
}

// Update soft skills list
function updateSoftSkills(profileData) {
  const softSkills = document.getElementById('profile.skills.softSkills');
  if (softSkills) {
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('');
  }
}

// Update hard skills with logos
function updateHardSkills(profileData) {
  const hardSkills = document.getElementById('profile.skills.hardSkills');
  if (hardSkills) {
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('');
  }
}

// Update languages list
function updateLanguages(profileData) {
  const languages = document.getElementById('profile.languages');
  if (languages) {
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('');
  }
}

// Update portfolio projects
function updatePortfolio(profileData) {
  const portfolio = document.getElementById('profile.portfolio');
  if (portfolio) {
    portfolio.innerHTML = profileData.portfolio.map(project => `
      <li>
        <span ${project.github ? 'class="title github"' : ''}>${project.name}</span>
        <a href="${project.url}" target="_blank">${project.url}</a>
      </li>
    `).join('');
  }
}

// Update professional experience
function updateProfessionalExperience(profileData) {
  const professionalExperience = document.getElementById('profile.professionalExperience');
  if (professionalExperience) {
    professionalExperience.innerHTML = profileData.professionalExperience.map(experience => `
      <span class="title">${experience.name}</span>
      <span class="period">${experience.period}</span>
      <ul>
        ${experience.description.map(item => `<li>${item}</li>`).join('')}
      </ul>
    `).join('');
  }
}

// Execute on page load
(async () => {
  try {
    console.log('Main script starting');
    const profileData = await fetchProfileData();
    if (!profileData) {
      console.error('No profile data loaded.');
      return;
    }
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateLanguages(profileData);
    updatePortfolio(profileData);
    updateProfessionalExperience(profileData);
  } catch (error) {
    console.error('Error in main script:', error);
  }
})();