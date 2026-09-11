import BloodCard from "../../../components/BloodCard/BloodCard";

function BloodAvailability() {
  const bloodData = [
    {
      bloodGroup: "A+",
      unitsAvailable: 284,
    },
    {
      bloodGroup: "A-",
      unitsAvailable: 47,
    },
    {
      bloodGroup: "B+",
      unitsAvailable: 312,
    },
    {
      bloodGroup: "B-",
      unitsAvailable: 18,
    },
    {
      bloodGroup: "AB+",
      unitsAvailable: 156,
    },
    {
      bloodGroup: "AB-",
      unitsAvailable: 9,
    },
    {
      bloodGroup: "O+",
      unitsAvailable: 521,
    },
    {
      bloodGroup: "O-",
      unitsAvailable: 63,
    },
  ];

  const getStatus = (units) => {
    if (units < 20) return "Critical";
    if (units < 100) return "Low";
    return "Available";
  };

  const getProgress = (units) => {
    return Math.min((units / 600) * 100, 100);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      {/* Heading */}
      <div className="mb-12">
        <p className="text-red-500 uppercase tracking-widest font-semibold">
          Live Inventory
        </p>

        <h2 className="text-5xl font-bold mt-3">
          Blood Availability
        </h2>

        <p className="text-gray-400 mt-4">
          Real-time stock across all partner blood banks and hospitals.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-4 gap-6">

        {bloodData.map((item) => (
          <BloodCard
            key={item.bloodGroup}
            bloodGroup={item.bloodGroup}
            unitsAvailable={item.unitsAvailable}
            status={getStatus(item.unitsAvailable)}
            progress={getProgress(item.unitsAvailable)}
          />
        ))}

      </div>

      {/* Legend */}
      <div className="flex gap-8 mt-10 text-sm text-gray-400">

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          Available (&gt;100 units)
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          Low Stock (20-100 units)
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          Critical (&lt;20 units)
        </div>

      </div>
    </section>
  );
}

export default BloodAvailability;