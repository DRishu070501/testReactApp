const apiURL = 'https://kps-api.prod.mobioffice.io/kps/master/marketZone/getAll'; // Replace with your actual API endpoint

export const fetchDropdownOptions2 = async (token) => {
  try {
    const response = await fetch(apiURL, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
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
