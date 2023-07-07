const BASE_URL = import.meta.env.VITE_API_URL;


export async function activate(token) {
    const url = `${BASE_URL}/auth/local/activate/${token}`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },

    };

    const response = await fetch(url, options);

    return response;
  };
