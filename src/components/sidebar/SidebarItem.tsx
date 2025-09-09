import Image from "next/image"
import { Button } from "../ui/button"
import clsx from "clsx"

type MenuItems = {
  icon: string,
  label: string
}

type SidebarItemProps = {
  category: string,
  menusData: MenuItems[],
  isLast: boolean
}
export default function SidebarItem({ category, menusData, isLast }: SidebarItemProps) {
  return (
    <>
      <p className={clsx("text-[#000000b3] text-xs font-[650] px-2.5 my-2", isLast ? 'mt-8' : '')}>{category}</p>
      {menusData.map((nestedItem, nestedIndex) => (
        <Button
          variant='ghost'
          className="flex flex-row items-center px-2 justify-start  my-2 space-x-1 w-[100%] rounded-sm  hover:bg-blue-100"
        >

          <Image src={nestedItem.icon} alt="dashboard-logo" height={20} width={20} />
          <span className="rext-sm">{nestedItem.label}</span>
        </Button>
      ))}

    </>
  )
}