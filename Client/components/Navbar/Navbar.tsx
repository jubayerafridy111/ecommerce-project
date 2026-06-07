import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50">
      <div
        className="
          mx-6 mt-4
          rounded-2xl
          bg-white/30
          backdrop-blur-md
          border border-white/20
          shadow-lg
          px-6 py-4
        "
      >
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold">
              ShopHub
            </h1>
          </div>

          {/* Search */}
          <div className="w-[40%]">
            <input
              type="text"
              placeholder="Search products..."
              className="
                w-full
                rounded-xl
                border
                border-gray-200
                bg-white/70
                px-4
                py-2
                outline-none
              "
            />
          </div>

          {/* Menu */}
          <div className="flex items-center gap-6">

            <button>
              Categories
            </button>

            <button>
              Shops
            </button>

            <button>
              Wishlist
            </button>

            <button>
              Cart (0)
            </button>

            <Link href="/login">


            <button
              className="
                rounded-xl
                bg-black
                px-4
                py-2
                text-white
              "
            >
              Login
            </button>
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}