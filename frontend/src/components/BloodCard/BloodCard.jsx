function BloodCard({
  bloodGroup,
  unitsAvailable,
  status,
  progress,
}) {
  const statusColors = {
    Available: "bg-green-900 text-green-400",
    Low: "bg-yellow-900 text-yellow-400",
    Critical: "bg-red-900 text-red-400",
  };

  const progressColors = {
    Available: "bg-green-500",
    Low: "bg-yellow-500",
    Critical: "bg-red-500",
  };

  return (
    <div className="bg-[#111111] border border-gray-800 rounded-3xl p-6">

      {/* Top Row */}
      <div className="flex justify-between items-center">
        <h2 className="text-5xl font-bold text-white">
          {bloodGroup}
        </h2>

        <span
          className={`px-4 py-1 rounded-full text-sm font-medium ${statusColors[status]}`}
        >
          {status}
        </span>
      </div>

      {/* Units */}
      <div className="mt-8">
        <h3 className="text-4xl font-bold text-white">
          {unitsAvailable}
        </h3>

        <p className="text-gray-500">
          units available
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-800 rounded-full mt-8 overflow-hidden">
        <div
          className={`h-full ${progressColors[status]}`}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Button */}
      <button className="mt-6 text-red-500 hover:text-red-400 font-medium">
        Request This Group →
      </button>
    </div>
  );
}

export default BloodCard;