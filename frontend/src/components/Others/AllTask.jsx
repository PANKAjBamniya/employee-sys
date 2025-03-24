import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../../features/admin/adminSlice";

const AllTask = () => {
  const { allTasks, allUser } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "done":
        return "bg-green-600"; // Gray for completed tasks
      case "pending":
        return "bg-blue-500"; // Yellow for ongoing tasks
      case "close":
        return "bg-red-600"; // Red for pending tasks
      default:
        return "bg-gray-800"; // Default color
    }
  };

  // Function to get employee name by matching assignedTo (ID) with allUser
  const getEmployeeName = (assignedTo) => {
    const user = allUser.find((u) => u._id === assignedTo);
    return user ? user.name : "Unknown"; // Default to "Unknown" if not found
  };

  return (
    <div className="bg-[#1c1c1c] p-5 overflow-auto my-6 rounded-lg">
      <table className="w-full border-collapse text-white">
        <thead>
          <tr className="border-b border-gray-700 text-left">
            <th className="px-4 py-2">Employee ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Task Title</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {allTasks.length > 0 ? (
            allTasks.map((task) => (
              <tr
                key={task._id}
                className={`${getStatusColor(
                  task.status
                )} border-b border-gray-700`}
              >
                <td className="px-4 py-2">{task.assignedTo || "N/A"}</td>
                <td className="px-4 py-2">
                  {getEmployeeName(task.assignedTo)}
                </td>
                <td className="px-4 py-2">{task.title}</td>
                <td className="px-4 py-2 font-semibold">{task.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="px-4 py-2 text-center text-gray-400">
                No tasks found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllTask;
