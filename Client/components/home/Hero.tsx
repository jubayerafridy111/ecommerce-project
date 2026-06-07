export default function Hero() {
  return (
    <section className="w-full mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Large Card */}
        <div
          className=" lg:col-span-2 h-[700px]
            rounded-3xl
            backdrop-blur-md
            bg-white/20
            border border-white/30
            shadow-xl
          "
        >
        </div>

        {/* Right Side */}
        <div className="grid grid-rows-2 gap-6">

          <div
            className="
              h-[330px]
              rounded-3xl
              backdrop-blur-md
              bg-white/20
              border border-white/30
              shadow-xl
            "
          >
          </div>

          <div
            className="
              h-[330px]
              rounded-3xl
              backdrop-blur-md
              bg-white/20
              border border-white/30
              shadow-xl
            "
          >
          </div>

        </div>

      </div>
    </section>
  );
}