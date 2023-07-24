const apiURL = 'https://kps-api.prod.mobioffice.io/kps/master/tablePartyMaster/temp'; 

export const fetchDropdownOptions3 = async (token,payload) => {
  try {
    const response = await fetch(apiURL, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload), 
    });
    console.log(payload);
    if (!response.ok) {
      throw new Error('Failed to fetch dropdown options.');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
