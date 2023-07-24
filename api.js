const apiURL = 'https://kps-api.prod.mobioffice.io/kps/master/user/getSalesUser'; // Replace with your actual API endpoint

export const fetchDropdownOptions = async (token) => {
  try {
    const response = await fetch(apiURL, {
      method: 'POST', // Change the method to POST
      headers: {
        'Content-Type': 'application/json', // Specify the content type
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({}), // Send an empty object as the request body
    });
    if (!response.ok) {
      throw new Error('Failed to fetch dropdown options.');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
