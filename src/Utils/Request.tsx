const API_DOMAIN = "https://api-nckh-1.onrender.com/api/v1/model";
const Request = async (url, method = "GET", body = null, options = {}) => {
  console.log(API_DOMAIN + url);
  try {
    const response = await fetch(API_DOMAIN + url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      body: body ? JSON.stringify(body) : null,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export const Get = (url) => Request(url);
export const Post = (url, body) => Request(url, "POST", body);
export const Patch = (url, body) => Request(url, "PATCH", body);
export const Delete = (url) => Request(url, "DELETE");
