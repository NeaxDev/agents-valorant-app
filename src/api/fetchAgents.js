export const getAgents = async (path) => {
  const BASE_URL = "https://valorant-api.com/v1/";

  try {
    const response = await fetch(`${BASE_URL}${path}`);

    const result = await response.json();

    if (result.status === 200) {
      return result;
    }
  } catch (error) {
    console.log(`ocurrio un error ${error}`);
  }
};
