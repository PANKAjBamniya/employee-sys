import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTasks, getAllUsers } from "../../features/admin/adminSlice";

const CreateTask = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    assignedTo: "",
    description: "",
  });

  const { allUser } = useSelector((state) => state.admin);
  const { title, date, assignedTo, description } = formData;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTasks(formData));
    console.log("Form Data:", formData);
  };

  return (
    <div className="w-full p-6 bg-[#1c1c1c] mt-5 rounded">
      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-6">
        <div className="flex flex-col w-full space-y-4">
          {/* Task Title */}
          <div>
            <h3 className="text-lg font-medium text-gray-200">Task Title</h3>
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
              placeholder="Make a UI design"
              className="w-full bg-gray-800 text-white border border-gray-600 p-2 rounded-md outline-none focus:border-emerald-500"
            />
          </div>

          {/* Date */}
          <div>
            <h3 className="text-lg font-medium text-gray-200">Date</h3>
            <input
              type="date"
              name="date"
              value={date}
              onChange={handleChange}
              className="w-full bg-gray-800 text-white border border-gray-600 p-2 rounded-md outline-none focus:border-emerald-500"
            />
          </div>

          {/* Assign to */}
          <div>
            <h3 className="text-lg font-medium text-gray-200">Assign to</h3>
            <select
              name="assignedTo"
              value={assignedTo}
              onChange={handleChange}
              className="w-full bg-gray-800 text-white border border-gray-600 p-2 rounded-md outline-none focus:border-emerald-500"
            >
              <option value="">Select Employee</option>
              {allUser &&
                allUser.map((user) => (
                  <option key={user._id} value={user._id}>
                    {user.name}
                  </option>
                ))}
            </select>
          </div>

          {/* Description */}
          <div className="w-full">
            <h3 className="text-lg font-medium text-gray-200">Description</h3>
            <textarea
              name="description"
              value={description}
              onChange={handleChange}
              cols="30"
              rows="6"
              placeholder="Task description..."
              className="w-full bg-gray-800 text-white border border-gray-600 p-3 rounded-md outline-none focus:border-emerald-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full lg:w-auto mt-4 bg-emerald-500 text-white py-2 px-6 rounded-md hover:bg-emerald-600 transition duration-300"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
