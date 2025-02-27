const API_DOMAIN = "https://api-nckh-1.onrender.com/api/v1/model";

interface RequestOptions {
  headers?: Record<string, string>;
}

const Request = async (
  url: string,
  method: string = "GET",
  body: any = null,
  options: RequestOptions = {} // Định nghĩa kiểu cho options
) => {
  console.log(API_DOMAIN + url);
  try {
    const response = await fetch(API_DOMAIN + url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        ...options.headers, // Giờ TypeScript sẽ hiểu headers
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

// Export các hàm gọi API
export const Get = (url: string, options?: RequestOptions) =>
  Request(url, "GET", null, options);
export const Post = (url: string, body: any, options?: RequestOptions) =>
  Request(url, "POST", body, options);
export const Patch = (url: string, body: any, options?: RequestOptions) =>
  Request(url, "PATCH", body, options);
export const Delete = (url: string, options?: RequestOptions) =>
  Request(url, "DELETE", null, options);
