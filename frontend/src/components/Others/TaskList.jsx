import React from "react";
import { useSelector } from "react-redux";

const TaskList = () => {
  const { singleUserTask } = useSelector((state) => state.admin);

  // Count tasks by status
  const taskCounts = {
    done: 0,
    close: 0,
    pending: 0,
  };

  singleUserTask?.forEach((task) => {
    if (task.status === "done") taskCounts.done++;
    else if (task.status === "close") taskCounts.close++;
    else if (task.status === "pending") taskCounts.pending++;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
      {/* Total Tasks Box */}
      <div className="md:p-10 p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-white mb-2">
          {singleUserTask?.length || 0}
        </h2>
        <h3 className="text-lg font-medium text-gray-100">Total Tasks</h3>
      </div>

      {/* Done Tasks */}
      <div className="md:p-10 p-6 bg-green-500 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-white mb-2">
          {taskCounts.done}
        </h2>
        <h3 className="text-lg font-medium text-gray-100">Done Tasks</h3>
      </div>

      {/* Pending Tasks */}
      <div className="md:p-10 p-6 bg-blue-500 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-white mb-2">
          {taskCounts.pending}
        </h2>
        <h3 className="text-lg font-medium text-gray-100">Pending Tasks</h3>
      </div>

      {/* Closed Tasks */}
      <div className="md:p-10 p-6 bg-red-500 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-white mb-2">
          {taskCounts.close}
        </h2>
        <h3 className="text-lg font-medium text-gray-100">Closed Tasks</h3>
      </div>
    </div>
  );
};

export default TaskList;
