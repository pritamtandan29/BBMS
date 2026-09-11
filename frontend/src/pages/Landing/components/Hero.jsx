import { Users, Droplets, Building2, Heart } from "lucide-react";
function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="bg-red-900 text-red-300 px-4 py-2 rounded-full">
            Real-time Blood Management Platform
          </span>

          <h1 className="text-6xl font-bold mt-6 leading-tight">
            Save Lives Through
            <span className="text-red-500 block">Smart Blood</span>
            Management
          </h1>

          <p className="text-gray-400 mt-6 text-lg">
            Connect donors, hospitals and blood banks through a unified
            platform.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-red-600 px-6 py-3 rounded-lg">
              Donate Blood
            </button>

            <button className="border border-gray-600 px-6 py-3 rounded-lg">
              Request Blood
            </button>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1615461066841-6116e61058f4"
            alt="blood donation"
            className="rounded-2xl"
          />
        </div>

        
        <div className="grid grid-cols-2 gap-6 mt-10">
          <div className="flex items-center gap-5 border border-gray-800 bg-[#0B0B12] rounded-2xl p-4">
            <div className="w-16 h-16 rounded-2xl border border-red-900 bg-red-950 flex items-center justify-center text-red-500">
              <Users size={28} />
            </div>

            <div>
              <h2 className="text-white text-4xl font-bold">48,320</h2>
              <p className="text-gray-400 text-lg">Total Donors</p>
            </div>
          </div>

          <div className="flex items-center gap-5 border border-gray-800 bg-[#0B0B12] rounded-2xl p-4">
            <div className="w-16 h-16 rounded-2xl border border-red-900 bg-red-950 flex items-center justify-center text-red-500">
              <Droplets size={28} />
            </div>

            <div>
              <h2 className="text-white text-4xl font-bold">12,847</h2>
              <p className="text-gray-400 text-lg">Blood Units Available</p>
            </div>
          </div>

          <div className="flex items-center gap-5 border border-gray-800 bg-[#0B0B12] rounded-2xl p-4">
            <div className="w-16 h-16 rounded-2xl border border-red-900 bg-red-950 flex items-center justify-center text-red-500">
              <Building2 size={28} />
            </div>

            <div>
              <h2 className="text-white text-4xl font-bold">234</h2>
              <p className="text-gray-400 text-lg">Hospitals Connected</p>
            </div>
          </div>

          <div className="flex items-center gap-5 border border-gray-800 bg-[#0B0B12] rounded-2xl p-4">
            <div className="w-16 h-16 rounded-2xl border border-red-900 bg-red-950 flex items-center justify-center text-red-500">
              <Heart size={28} />
            </div>

            <div>
              <h2 className="text-white text-4xl font-bold">96,400</h2>
              <p className="text-gray-400 text-lg">Lives Saved</p>
            </div>
          </div>
        </div>

      </div>
      <hr className="text-gray-400 mt-10"></hr>
    </section>
  );
}

export default Hero;
