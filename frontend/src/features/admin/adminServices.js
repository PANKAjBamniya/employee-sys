import axios from "axios";

const fetchAllUsers = async () => {
  try {
    const response = await axios.get(`/api/admin/user`);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching users:",
      error.response?.data || error.message
    );
  }
};

const fetchAllTasks = async () => {
  try {
    const response = await axios.get(`/api/admin/task`);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching tasks:",
      error.response?.data || error.message
    );
  }
};

const createTask = async (formData) => {
  try {
    const response = await axios.post(`/api/admin/task/`, formData);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching tasks:",
      error.response?.data || error.message
    );
  }
};

const getUserTask = async (id) => {
  try {
    const response = await axios.get(`/api/task/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching tasks:",
      error.response?.data || error.message
    );
  }
};

const adminServices = {
  fetchAllUsers,
  fetchAllTasks,
  createTask,
  getUserTask,
};

export default adminServices;
