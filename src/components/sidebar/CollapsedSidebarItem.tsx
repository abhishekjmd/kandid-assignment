'use client'
import { Button } from "../ui/button"
import Image from "next/image"
import clsx from "clsx"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
type CollapsedSidebarItemProps = {
  icon?: string,
  label?: string,
  isActive?: boolean,
  onClick?: () => void,
  isLast?: boolean,
  tooltipSide?: "top" | "right" | "bottom" | "left"
  children?: React.ReactNode // for custom icons (dark/light mode toggle)
}

export default function CollapsedSidebarItem({ icon, label, isActive, onClick, isLast, tooltipSide = "right",
  children, }: CollapsedSidebarItemProps) {
  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant='ghost'
            onClick={onClick}
            className={clsx('flex justify-center items-center px-3 py-5.5 rounded-sm  hover:bg-blue-100', isLast && 'mt-5', isActive && 'bg-blue-100')}
          >
            {children ? children : icon && <Image src={icon} height={20} width={20} alt={label} />}
            {/* <Image src={icon} height={20} width={20} alt="logo" /> */}
          </Button>
        </TooltipTrigger>
        <TooltipContent side={tooltipSide} className="bg-[#1b54d0] px-3 py-1 text-sm text-white rounded-sm ml-1">
          {label}
        </TooltipContent>
      </Tooltip>
    </>
  )
}