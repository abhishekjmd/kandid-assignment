'use client'

import Image from "next/image"
import { campaign, chat, dark, dashboard, lead, light, linkedin, message, microphone, moonIcon, roadmap, setting, toggle } from "@/assets"
import clsx from "clsx"
import { useState } from "react"
import CollapsedSidebarItem from "./CollapsedSidebarItem"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { usePathname, useRouter } from "next/navigation"
import SidebarItem from "./SidebarItem";
const collapsedMenuItems = [
  { id: 1, icon: dashboard, label: 'Dashboard' },
  { id: 2, icon: lead, label: 'Leads', path: '/leads' },
  { id: 3, icon: campaign, label: 'Campaign', path: '/campaigns' },
  { id: 4, icon: message, label: 'Messages' },
  { id: 5, icon: linkedin, label: 'Linkedin' },
  { id: 6, icon: setting, label: 'Setting & Billing' }

]

const menuItems = [
  {
    category: 'Overview',
    menus: [
      { id: 1, icon: dashboard, label: 'Dashboard' },
      { id: 2, icon: lead, label: 'Leads', path: '/leads' },
      { id: 3, icon: campaign, label: 'Campaign', path: '/campaigns' },
      { id: 4, icon: message, label: 'Messages' },
      { id: 5, icon: linkedin, label: 'Linkedin Accounts' },
    ]
  }, {
    category: 'Settings',
    menus: [
      { id: 6, icon: setting, label: 'Setting & Billing' }
    ]
  }
]

const bottomMenus = [
  { id: 1, icon: chat, label: 'Send Feedback' },
  { id: 2, icon: roadmap, label: 'View roadmap', path: '/leads' },
  { id: 3, icon: microphone, label: 'Get support', path: '/campaigns' },
  { id: 4, icon: moonIcon, label: 'Switch to dark mode' },
]

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isActive, setIsActive] = useState(pathname.includes('leads') ? 'Leads' : '');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <aside className={clsx("bg-red flex-col justify-center items-center border border-r-2 rounded-lg ml-2 w-17 h-[98vh] bg-white transition-all shadow-sm", { 'w-60': !isCollapsed })}>
      <div className="flex h-[100%] justify-between items-center flex-col">
        <div className="flex flex-col justify-center items-center">
          <div className={clsx("w-[100%] flex justify-center mt-5 ", isCollapsed ? 'mb-5' : 'mb-0')}>
            {isCollapsed ? (
              <Image src="/LinkBird-collapsed.svg" height={48} width={48} alt="logo" />
            ) : (
              <Image src="/linkbird-notCollapsed-logo.svg" height={120} width={120} alt="logo" />
            )}

          </div>
          <div className={clsx("bg-[#e4e4e7] h-[1px] mt-5 mb-5  w-[100%]", { 'w-[220px] mt-0': !isCollapsed })} />
          <div className="flex w-[100%] flex-col space-y-1">
            {isCollapsed ? (
              collapsedMenuItems.map((item, index) => (
                <CollapsedSidebarItem
                  key={item.id}
                  icon={item.icon}
                  label={item.label}
                  isActive={isActive === item.label}
                  onClick={() => {
                    setIsActive(item.label)
                    router.push(item?.path)
                  }}
                  isLast={item.id === collapsedMenuItems.length}
                />
              ))
            ) : (
              <div className="w-[100%]">
                {menuItems && menuItems.map((item, index) => (
                  <SidebarItem
                    category={item.category}
                    menusData={item.menus}
                    isLast={index === menuItems.length - 1}
                  />
                ))}
              </div>
            )}

          </div>
        </div>
        <div>
          {isCollapsed ? (
            <div className="flex flex-col justify-center space-y-10 items-center">
              <CollapsedSidebarItem
                label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                tooltipSide="top"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                {isDarkMode ? (
                  <Image src={dark} height={15} width={15} alt="darkIcon" />
                ) : (
                  <Image src={light} height={15} width={15} alt="lightIcon" />
                )}

              </CollapsedSidebarItem>
              <div className="mb-2">
                <Avatar>
                  <AvatarFallback>AT</AvatarFallback>
                </Avatar>
              </div>
            </div>
          ) : (
            <div className="flex flex-col space-y-3 mb-3">
              <div className="flex flex-row space-x-3">
                {bottomMenus.map((item, index) => (
                  <CollapsedSidebarItem tooltipSide="top" icon={item.icon} label={item.label}>
                    <Image src={item.icon} height={15} width={15} alt='icon' className="" />
                  </CollapsedSidebarItem>
                ))}
              </div>
              <div className="flex flex-row items-center space-x-1">
                <div>
                  <Avatar>
                    <AvatarFallback>AT</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <p className="font-[600] text-md">Abhishek Tiwari</p>
                  <p className="text-xs text-[#71717a]">abhishekiwariisro1278..</p>
                </div>
              <div className="ml-4">
                <Image src={toggle} height={16} width={16} alt="toggle-icon" />
              </div> 
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}