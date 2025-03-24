import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAllTask } from "../../features/admin/adminSlice";

const TackListitem = () => {
  const { user } = useSelector((state) => state.auth);
  const { singleUserTask } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAllTask(user._id));
  }, [dispatch, user._id]);

  // Function to determine background color based on status
  const getStatusColor = (status) => {
    switch (status) {
      case "done":
        return "bg-green-700";
      case "close":
        return "bg-red-700";
      case "pending":
        return "bg-blue-700";
      default:
        return "bg-gray-700";
    }
  };

  return (
    <div
      id="tasklistitem"
      className="h-[50vh] overflow-x-auto flex gap-5 flex-nowrap w-full mt-4"
    >
      {singleUserTask.map((task) => (
        <div
          key={task._id}
          className={`flex-shrink-0 h-full w-[300px] p-5 rounded-xl flex flex-col justify-between ${getStatusColor(
            task.status
          )}`}
        >
          <div>
            <div className="flex justify-between">
              <h3 className="bg-black text-white rounded-sm text-sm px-3 py-1">
                {task.status}
              </h3>
              <h4>{task.date}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">{task.title}</h2>
            <p className="text-sm mt-2">{task.description}</p>
          </div>
          <div className="flex gap-3 mt-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
              Done
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
              Close
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Pending
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TackListitem;
