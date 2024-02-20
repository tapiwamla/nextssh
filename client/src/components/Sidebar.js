import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { HiTerminal } from "react-icons/hi";
import Link from "next/link";
import { useContext } from "react";
import { SidebarContext } from "@/context/SidebarContext";
import { useRouter } from "next/router";

const sidebarItems = [
  {
    name: "New Connection",
    href: "/connect",
    icon: FaPlus,
  },
  {
    name: "Dashboard",
    href: "/",
    icon: MdSpaceDashboard,
  },
  {
    name: "Terminal",
    href: "/terminal",
    icon: HiTerminal,
  },
  {
    name: "Account",
    href: "/account",
    icon: MdAccountCircle,
  },
];

const Sidebar = () => {
  const router = useRouter();
  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);

  return (
    <div className="sidebar-wrapper">
      <button className="btn" onClick={toggleSidebarcollapse}>
        {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </button>
      <aside className="sidebar" data-collapse={isCollapsed}>
        <div className="sidebar-top">
          <Image
            width={80}
            height={80}
            className="sidebar-logo"
            src="/logo.jpg"
            alt="logo"
          />
          <p className="sidebar-logo-name">CSHELL CONSOLE</p>
        </div>
        <ul className="sidebar-list">
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
              <li className="sidebar-item" key={name}>
                <Link
                  className={`sidebar-link ${
                    router.pathname === href ? "sidebar-link--active" : ""
                  }`}
                  href={href}
                >
                  <span className="sidebar-icon">
                    <Icon />
                  </span>
                  <span className="sidebar-name">{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        {!isCollapsed && (
          <div className="sidebar-footer">
            <p>Copyright © 2024 Tapiwanashe Mlambo</p>
            <p>
              <a href="https://tapiwamla.me" target="_blank" rel="noreferrer">Blog</a> | <a href="https://github.com/tapiwamla" target="_blank" rel="noreferrer">Github</a> | <a href="https://linkedin.com/in/tapiwamla" target="_blank" rel="noreferrer">Linkedin</a>
            </p>
          </div>
        )}
      </aside>
    </div>
  );
};

export default Sidebar;
