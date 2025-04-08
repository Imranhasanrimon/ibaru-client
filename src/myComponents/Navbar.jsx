import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import img from "../assets/logo/IBA_logo_rounded.png"
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, Telescope, Focus, History, Crosshair, Mail, Users, UserRound, Home, Newspaper } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import useAuth from "@/hooks/useAuth";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useAuth();
    const menu = <>
        <MenubarMenu>
            <Link to="/">
                <MenubarTrigger className="cursor-pointer"><Home /></MenubarTrigger>
            </Link>
        </MenubarMenu>
        <MenubarMenu >
            <MenubarTrigger>About Us</MenubarTrigger>
            <MenubarContent>
                <Link to="/history">
                    <MenubarItem className="cursor-pointer" >
                        History <MenubarShortcut><History /></MenubarShortcut>
                    </MenubarItem>
                </Link>
                <Link to="/vision">
                    <MenubarItem className="cursor-pointer" >
                        Vision <MenubarShortcut><Telescope /></MenubarShortcut>
                    </MenubarItem>
                </Link>
                <Link to="/mission">
                    <MenubarItem className="cursor-pointer" >
                        Mission <MenubarShortcut><Focus /></MenubarShortcut>
                    </MenubarItem>
                </Link>
                <Link to="/goal">
                    <MenubarItem className="cursor-pointer" >
                        Goal <MenubarShortcut><Crosshair /></MenubarShortcut>
                    </MenubarItem>
                </Link>
                <Link to="/message-of-director">
                    <MenubarItem className="cursor-pointer" >
                        Message of Directior <MenubarShortcut><Mail /></MenubarShortcut>
                    </MenubarItem>
                </Link>
            </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger>Admission</MenubarTrigger>
            <MenubarContent>
                <Link to="/admission-bba">
                    <MenubarItem className="cursor-pointer">BBA Program</MenubarItem>
                </Link>
                <Link to="/admission-mba">
                    <MenubarItem className="cursor-pointer">MBA Program <span className="text-sm text-slate-500">(BBA Graduates)</span></MenubarItem>
                </Link>
                <Link to="/admission-mba-evening">
                    <MenubarItem className="cursor-pointer">MBA Program <span className="text-sm text-slate-500">(Evening)</span></MenubarItem>
                </Link>
                <Link to="/admission-mba-executive">
                    <MenubarItem className="cursor-pointer">MBA Program <span className="text-sm text-slate-500">(Executive)</span></MenubarItem>
                </Link>
                <Link to="/admission-m-phil">
                    <MenubarItem className="cursor-pointer">M.Phid</MenubarItem>
                </Link>
                <Link to="/admission-phd">
                    <MenubarItem className="cursor-pointer">PhD</MenubarItem>
                </Link>
            </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
                <Link to="/faculties">
                    <MenubarItem className="cursor-pointer" >
                        Faculties <MenubarShortcut><Users /></MenubarShortcut>
                    </MenubarItem>
                </Link>
                <Link to="/officers-and-staffs">
                    <MenubarItem className="cursor-pointer" >
                        Offiers and Staffs <MenubarShortcut><UserRound /></MenubarShortcut>
                    </MenubarItem>
                </Link>
                <Link to="/mission">
                    <MenubarItem className="cursor-pointer" >
                        Mission <MenubarShortcut><Focus /></MenubarShortcut>
                    </MenubarItem>
                </Link>
                <Link to="/goal">
                    <MenubarItem className="cursor-pointer" >
                        Goal <MenubarShortcut><Crosshair /></MenubarShortcut>
                    </MenubarItem>
                </Link>
                <Link to="/message-of-director">
                    <MenubarItem className="cursor-pointer" >
                        Message of Directior <MenubarShortcut><Mail /></MenubarShortcut>
                    </MenubarItem>
                </Link>
            </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger>Profiles</MenubarTrigger>
            <MenubarContent>
                <MenubarRadioGroup value="benoit">
                    <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                    <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                    <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                </MenubarRadioGroup>
                <MenubarSeparator />
                <MenubarItem className="cursor-pointer" inset>Edit...</MenubarItem>
                <MenubarSeparator />
                <MenubarItem className="cursor-pointer" inset>Add Profile...</MenubarItem>
            </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
            <Link to="/feeds">
                <MenubarTrigger className="cursor-pointer"><Newspaper /></MenubarTrigger>
            </Link>
        </MenubarMenu>
    </>
    return (
        <Menubar className="sticky top-0 z-50 bg-background/50 backdrop-blur-md">
            <div className="flex items-center gap-2">
                <Link to="/" className="flex items-center gap-2 cursor-pointer">
                    <img src={img} className="w-8 object-cover" alt="IBA logo" />
                    <h1 className="text-xl">IBA</h1>
                </Link>
                {/* Mobile Drawer Menu */}
                <div className="sm:hidden ml-2">
                    <Sheet open={isOpen} onOpenChange={setIsOpen} side="left">
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="cursor-pointer">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="p-4" side="left">
                            <SheetTitle className="sr-only">My Hidden Sheet Title</SheetTitle>
                            <SheetDescription>Contents</SheetDescription>
                            <Menubar className="flex flex-col rounded-lg">
                                {menu}
                            </Menubar>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

            <div className="hidden sm:flex justify-center items-center">
                {menu}
            </div>




            <div className="flex items-center gap-2 justify-between">
                <ModeToggle />
                {user?.email ?
                    <Link to="/dashboard">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Avatar>
                                    <AvatarImage src={user?.photoURL} alt="Student's Image" />
                                    <AvatarFallback>{user?.email}</AvatarFallback>
                                </Avatar>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Your Account</p>
                            </TooltipContent>
                        </Tooltip>
                    </Link>
                    :
                    <Link to="/login">
                        <Button className="cursor-pointer">Login</Button>
                    </Link>}

            </div>
        </Menubar>

    );
};

export default Navbar;