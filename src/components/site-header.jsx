import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ModeToggle } from "./ui/mode-toggle";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const { pathname } = useLocation();
  const path = pathname.split("/")[2];
  const [headingTitle, setHeadingTitle] = useState();

  useEffect(() => {
    if (path === "my-account") {
      setHeadingTitle("My Account")
    } else if (path === "my-fees") {
      setHeadingTitle("My Fees")
    } else if (path === "my-result") {
      setHeadingTitle("My Result")
    } else {
      setHeadingTitle("Default dashboard")
    }
  }, [path])

  return (
    <header
      className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) ">
      <div className="flex w-full items-center gap-1 py-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
        <h1 className="text-base font-medium">{headingTitle}</h1>
        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
