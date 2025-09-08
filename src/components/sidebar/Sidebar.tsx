'use client'

import Image from "next/image"
import { Button } from "../ui/button"
import { campaign, dark, dashboard, lead, light, linkedin, message, setting } from "@/assets"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import clsx from "clsx"
import { useState } from "react"
import SidebarItem from "./SidebarItem"
import { Avatar, AvatarFallback } from "../ui/avatar"

const menuItems = [
  { id: 1, icon: dashboard, label: 'Dashboard' },
  { id: 2, icon: lead, label: 'Leads' },
  { id: 3, icon: campaign, label: 'Campaign' },
  { id: 4, icon: message, label: 'Messages' },
  { id: 5, icon: linkedin, label: 'Linkedin' },
  { id: 6, icon: setting, label: 'Setting & Billing' }

]

export function Sidebar() {
  const [isActive, setIsActive] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <aside className="bg-red flex-col justify-center items-center border rounded-lg ml-2 w-16 h-[98vh] bg-white transition-all shadow-sm">
      <div className="flex h-[100%] justify-between items-center flex-col">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[100%] flex justify-center mt-5 mb-5 ">
            <Image src="/LinkBird-collapsed.svg" height={48} width={48} alt="logo" />
          </div>
          <div className="bg-[#e4e4e7] h-[1px] mt-5 mb-5  w-[100%]" />
          <div className="flex flex-col space-y-1">
            {menuItems.map((item, index) => (
              <SidebarItem
                key={item.id}
                icon={item.icon}
                label={item.label}
                isActive={isActive === item.label}
                onClick={() => setIsActive(item.label)}
                isLast={item.id === menuItems.length}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-10 items-center">
          <SidebarItem
            label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            tooltipSide="top"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? (
              <Image src={dark} height={15} width={15} alt="darkIcon" />
            ) : (
              <Image src={light} height={15} width={15} alt="lightIcon" />
            )}

          </SidebarItem>
          <div>
            <Avatar>
              <AvatarFallback>AT</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </aside>
  )
}