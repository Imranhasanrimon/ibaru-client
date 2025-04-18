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
import { Menu, Telescope, Focus, History, Crosshair, Mail, Users, UserRound, Images, GraduationCap, Home, Users2, BookOpenText, LayoutDashboard, Aperture, Rss } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import useAuth from "@/hooks/useAuth";
import { getStudentId } from "@/utils";

const Navbar = () => {
    const [showMore, setShowMore] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useAuth();
    const menu = <>
        <MenubarMenu>
            <Link to="/" className="w-full sm:w-auto">
                <MenubarTrigger className="hover:bg-accent cursor-pointer w-full sm:w-auto py-2 sm:py-1 text-lg sm:text-base"><Home size={18} className="mr-2 sm:hidden inline-block" />Home</MenubarTrigger>
            </Link>
        </MenubarMenu>
        <MenubarMenu >
            <MenubarTrigger className="hover:bg-accent cursor-pointer w-full sm:w-auto py-2 sm:py-1 text-lg sm:text-base"><Users2 size={18} className="mr-2 sm:hidden inline-block" /> About Us</MenubarTrigger>
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
            <MenubarTrigger className="hover:bg-accent cursor-pointer w-full sm:w-auto py-2 sm:py-1 text-lg sm:text-base"><BookOpenText size={18} className="mr-2 sm:hidden inline-block" />Admission</MenubarTrigger>
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
            <MenubarTrigger className="hover:bg-accent cursor-pointer w-full sm:w-auto py-2 sm:py-1 text-lg sm:text-base"><LayoutDashboard size={18} className="mr-2 sm:hidden inline-block" />View</MenubarTrigger>
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
                <Link to="/gallery">
                    <MenubarItem className="cursor-pointer" >
                        Gallery <MenubarShortcut><Images /></MenubarShortcut>
                    </MenubarItem>
                </Link>

                <MenubarSeparator />

                {/* Batches */}
                <MenubarSub >
                    <MenubarSubTrigger > Batches </MenubarSubTrigger>
                    <MenubarSubContent >
                        <MenubarItem>Explore</MenubarItem>
                        <MenubarSeparator />
                        <Link to="/batches/9">
                            <MenubarItem className="cursor-pointer" >
                                9th  <MenubarShortcut><GraduationCap /></MenubarShortcut>
                            </MenubarItem>
                        </Link>
                        <Link to="/batches/8">
                            <MenubarItem className="cursor-pointer" >
                                8th  <MenubarShortcut><GraduationCap /></MenubarShortcut>
                            </MenubarItem>
                        </Link>
                        <Link to="/batches/7">
                            <MenubarItem className="cursor-pointer" >
                                7th  <MenubarShortcut><GraduationCap /></MenubarShortcut>
                            </MenubarItem>
                        </Link>
                        <Link to="/batches/6">
                            <MenubarItem className="cursor-pointer">
                                6th <MenubarShortcut><GraduationCap /></MenubarShortcut>
                            </MenubarItem>
                        </Link>
                        {/* Expandable extra batches */}
                        {showMore && (
                            <>
                                <Link to="/batches/5">
                                    <MenubarItem className="cursor-pointer">
                                        5th <MenubarShortcut><GraduationCap /></MenubarShortcut>
                                    </MenubarItem>
                                </Link>
                                <Link to="/batches/4">
                                    <MenubarItem className="cursor-pointer">
                                        4th <MenubarShortcut><GraduationCap /></MenubarShortcut>
                                    </MenubarItem>
                                </Link>
                                <Link to="/batches/3">
                                    <MenubarItem className="cursor-pointer">
                                        3rd <MenubarShortcut><GraduationCap /></MenubarShortcut>
                                    </MenubarItem>
                                </Link>
                                <Link to="/batches/2">
                                    <MenubarItem className="cursor-pointer">
                                        2nd <MenubarShortcut><GraduationCap /></MenubarShortcut>
                                    </MenubarItem>
                                </Link>
                                <Link to="/batches/1">
                                    <MenubarItem className="cursor-pointer">
                                        1st <MenubarShortcut><GraduationCap /></MenubarShortcut>
                                    </MenubarItem>
                                </Link>
                            </>
                        )}

                        <MenubarSeparator />

                        {/* More / Less button */}
                        <MenubarItem
                            onSelect={(e) => {
                                e.preventDefault();
                                setShowMore(!showMore);
                            }}
                            className="cursor-pointer font-medium"
                        >
                            {showMore ? "Show Less" : "More..."}
                        </MenubarItem>
                    </MenubarSubContent>
                </MenubarSub>

                <MenubarSeparator />
                <Link to="/message-of-director">
                    <MenubarItem className="cursor-pointer" >
                        Message of Directior <MenubarShortcut><Mail /></MenubarShortcut>
                    </MenubarItem>
                </Link>
            </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
            <MenubarTrigger className="hover:bg-accent cursor-pointer w-full sm:w-auto py-2 sm:py-1 text-lg sm:text-base"><Aperture size={18} className="mr-2 sm:hidden inline-block" />Profiles</MenubarTrigger>
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
            <Link to="/feeds" className="w-full sm:w-auto">
                <MenubarTrigger className="hover:bg-accent cursor-pointer w-full sm:w-auto py-2 sm:py-1 text-lg sm:text-base"><Rss size={18} className="mr-2 sm:hidden inline-block" />Feeds</MenubarTrigger>
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
                <div className="sm:hidden ml-2 ">
                    <Sheet open={isOpen} onOpenChange={setIsOpen} side="left">
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="cursor-pointer">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="p-4 bg-sidebar" side="left">
                            <SheetTitle className="sr-only">My Hidden Sheet Title</SheetTitle>
                            <SheetDescription className="text-primary">
                                <Link to="/" className="inline-flex items-center gap-2 cursor-pointer">
                                    <img src={img} className="w-8 object-cover" alt="IBA logo" />
                                    <span className="text-xl">IBA RU</span>
                                </Link>
                            </SheetDescription>

                            <Menubar className="flex flex-col items-start rounded-lg  bg-sidebar p-0 border-0 shadow-none">
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
                                    <AvatarFallback>{user && getStudentId(user?.email).slice(-2)}</AvatarFallback>
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