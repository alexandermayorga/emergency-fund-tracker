import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header>
      <div className="navbar mb-5 bg-neutral text-neutral-content">
        <div className="container mx-auto">
          <div className="flex-1">
            <Link className="btn btn-ghost text-xl" href="/">
              daisyUI
            </Link>
          </div>
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="avatar placeholder btn btn-circle btn-primary text-base-100"
              >
                <div className="w-10 rounded-full">
                  <span>A</span>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-neutral p-2 text-neutral-content shadow"
              >
                <li className="hover:bg-primary hover:text-base-100">
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li className="hover:bg-primary hover:text-base-100">
                  <a>Settings</a>
                </li>
                <li className="hover:bg-primary hover:text-base-100">
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
