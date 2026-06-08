"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

export default function Navbar() {
  const auth = useSelector(
    (state: RootState) => state.auth
  );

  const cart = useSelector(
    (state: RootState) => state.cart
  );

  const wishlist = useSelector(
    (state: RootState) => state.wishlist
  );

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

            {!auth.isAuthenticated && (
              <>
                <button>
                  Join as Seller
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
              </>
            )}

            {auth.isAuthenticated && (
              <>
                <button>
                  Wishlist ({wishlist.items.length})
                </button>

                <button>
                  Cart ({cart.items.length})
                </button>

                <div className="relative group">

                  <button
                    className="
                      rounded-xl
                      bg-black
                      px-4
                      py-2
                      text-white
                    "
                  >
                    {auth.user}
                  </button>

                  <div
                    className="
                      hidden
                      group-hover:block
                      absolute
                      right-0
                      mt-2
                      w-48
                      rounded-xl
                      bg-white
                      shadow-lg
                      border
                      p-2
                    "
                  >
                    <button className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg">
                      My Profile
                    </button>

                    <button className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg">
                      Orders
                    </button>

                    <button className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg">
                      Settings
                    </button>

                    <button className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg text-red-500">
                      Logout
                    </button>
                  </div>

                </div>
              </>
            )}

          </div>

        </div>
      </div>
    </nav>
  );
}