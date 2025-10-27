async function fetchProfileData() {
    try {
    const response = await fetch('./data/profile.json');
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