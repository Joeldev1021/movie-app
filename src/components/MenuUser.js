import React from "react";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";

const MenuUser = ({ classNames, logoutAuth, user }) => {
  return (
      <>
      <Menu.Item>
        {({ active }) => (
          <Link to="/profile"
            className={classNames(
              active ? "bg-gray-100" : "",
              "block px-4 py-2 text-sm text-gray-700"
            )}
          >
            Your Profile
          </Link>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            href="#"
            className={classNames(
              active ? "bg-gray-100" : "",
              "block px-4 py-2 text-sm text-gray-700"
            )}
          >
            Settings
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) =>
          !user
            ? (<Link to="/login" className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
              login
            </Link>)
            : (
            <Link to="/" onClick={() => logoutAuth()}className={classNames(active ? "bg-gray-100" : "block px-4 py-2 text-sm text-gray-700")} >
              logout
            </Link>
              )
        }
      </Menu.Item>
    </>
  );
};

export default MenuUser;
