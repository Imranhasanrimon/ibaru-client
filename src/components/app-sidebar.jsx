import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconHome,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
  IconNews
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import useAuth from "@/hooks/useAuth"
import { getStudentId } from "@/utils"
import { Link } from "react-router-dom"


export function AppSidebar({
  ...props
}) {
  const { user, } = useAuth();
  // if (loading) return <LoadingSpinner />
  const data = {
    user: {
      name: user && user.displayName,
      email: user && getStudentId(user?.email),
      avatar: user && user?.photoURL,
    },
    navMain: [
      {
        title: "Go Home",
        url: "/",
        icon: IconHome,
      },
      {
        title: "My Posts",
        url: `/dashboard/my-all-posts/${user && getStudentId(user?.email)}`,
        icon: IconNews,
      },
      {
        title: "Lifecycle",
        url: "#",
        icon: IconListDetails,
      },
      {
        title: "Analytics",
        url: "#",
        icon: IconChartBar,
      },
      {
        title: "Projects",
        url: "#",
        icon: IconFolder,
      },
      {
        title: "Our Batch",
        url: "/dashboard/our-batch",
        icon: IconUsers,
      },
    ],
    navClouds: [
      {
        title: "Capture",
        icon: IconCamera,
        isActive: true,
        url: "#",
        items: [
          {
            title: "Active Proposals",
            url: "#",
          },
          {
            title: "Archived",
            url: "#",
          },
        ],
      },
      {
        title: "Proposal",
        icon: IconFileDescription,
        url: "#",
        items: [
          {
            title: "Active Proposals",
            url: "#",
          },
          {
            title: "Archived",
            url: "#",
          },
        ],
      },
      {
        title: "Prompts",
        icon: IconFileAi,
        url: "#",
        items: [
          {
            title: "Active Proposals",
            url: "#",
          },
          {
            title: "Archived",
            url: "#",
          },
        ],
      },
    ],
    navSecondary: [
      {
        title: "Settings",
        url: "#",
        icon: IconSettings,
      },
      {
        title: "Get Help",
        url: "#",
        icon: IconHelp,
      },
      {
        title: "Search",
        url: "#",
        icon: IconSearch,
      },
    ],
    documents: [
      {
        name: "Data Library",
        url: "#",
        icon: IconDatabase,
      },
      {
        name: "Reports",
        url: "#",
        icon: IconReport,
      },
      {
        name: "Word Assistant",
        url: "#",
        icon: IconFileWord,
      },
    ],
  }
  // if (loading) return <LoadingSpinner />
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <Link to="/">
                <img src="https://i.ibb.co.com/gLx0wMNK/logo-common.jpg" alt="IBA Logo" className="!size-6 object-cover rounded-full" />
                <span className="text-base font-semibold">IBA</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
