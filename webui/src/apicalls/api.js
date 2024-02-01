import { BASE_URL } from './endpoint';

export const fetchMyJobData = async (data) => {
    try {
      console.log("data----------------------------->",data)
      const response = await fetch(`${BASE_URL}/job/track`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      throw new Error(`Error posting data: ${error.message}`);
    }
  };