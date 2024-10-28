// Import the Axios library to make HTTP requests.
import axios from "axios";

// Function to log in a user with provided email and password.
export const loginUser = async (email: string, password: string) => {
  // Send a POST request to the '/user/login' endpoint with email and password as payload.
  const res = await axios.post("/user/login", { email, password });

  // If the server does not respond with a status code of 200, throw an error.
  if (res.status !== 200) {
    throw new Error("Unable to login");
  }

  // Extract and return the data from the response.
  const data = await res.data;
  return data;
};

// Function to register a new user with name, email, and password.
export const signupUser = async (
    name: string,
    email: string,
    password: string
) => {
  // Send a POST request to the '/user/signup' endpoint with name, email, and password as payload.
  const res = await axios.post("/user/signup", { name, email, password });

  // If the server does not respond with a status code of 201, throw an error.
  if (res.status !== 201) {
    throw new Error("Unable to Signup");
  }

  // Extract and return the data from the response.
  const data = await res.data;
  return data;
};

// Function to check if the user is currently authenticated.
export const checkAuthStatus = async () => {
  // Send a GET request to the '/user/auth-status' endpoint.
  const res = await axios.get("/user/auth-status");

  // If the server does not respond with a status code of 200, throw an error.
  if (res.status !== 200) {
    throw new Error("Unable to authenticate");
  }

  // Extract and return the data from the response.
  const data = await res.data;
  return data;
};

// Function to send a new chat message to the chat API.
export const sendChatRequest = async (message: string) => {
  // Send a POST request to the '/chat/new' endpoint with the chat message as payload.
  const res = await axios.post("/chat/new", { message });

  // If the server does not respond with a status code of 200, throw an error.
  if (res.status !== 200) {
    throw new Error("Unable to send chat");
  }

  // Extract and return the data from the response.
  const data = await res.data;
  return data;
};

// Function to retrieve all chat messages of the user.
export const getUserChats = async () => {
  // Send a GET request to the '/chat/all-chats' endpoint to retrieve all chats.
  const res = await axios.get("/chat/all-chats");

  // If the server does not respond with a status code of 200, throw an error.
  if (res.status !== 200) {
    throw new Error("Unable to send chat");
  }

  // Extract and return the data from the response.
  const data = await res.data;
  return data;
};

// Function to delete all user chat messages.
export const deleteUserChats = async () => {
  // Send a DELETE request to the '/chat/delete' endpoint to remove all chats.
  const res = await axios.delete("/chat/delete");

  // If the server does not respond with a status code of 200, throw an error.
  if (res.status !== 200) {
    throw new Error("Unable to delete chats");
  }

  // Extract and return the data from the response.
  const data = await res.data;
  return data;
};

// Function to log out the user.
export const logoutUser = async () => {
  // Send a GET request to the '/user/logout' endpoint to log out the user.
  const res = await axios.get("/user/logout");

  // If the server does not respond with a status code of 200, throw an error.
  if (res.status !== 200) {
    throw new Error("Unable to delete chats");
  }

  // Extract and return the data from the response.
  const data = await res.data;
  return data;
};
