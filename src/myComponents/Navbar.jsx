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
import img from "../assets/logo/IBA_logo_rounded.png"
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, Telescope, Focus, History, Crosshair, Mail } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menu = <>
        <MenubarMenu>
            <MenubarTrigger>About Us</MenubarTrigger>
            <MenubarContent>
                <Link to="/history">
                    <MenubarItem >
                        History <MenubarShortcut><History /></MenubarShortcut>
                    </MenubarItem>
                </Link>
                <Link>
                    <MenubarItem >
                        Vision <MenubarShortcut><Telescope /></MenubarShortcut>
                    </MenubarItem>
                </Link>
                <Link>
                    <MenubarItem >
                        Mission <MenubarShortcut><Focus /></MenubarShortcut>
                    </MenubarItem>
                </Link>
                <Link>
                    <MenubarItem >
                        Goal <MenubarShortcut><Crosshair /></MenubarShortcut>
                    </MenubarItem>
                </Link>
                <Link>
                    <MenubarItem >
                        Message of Directior <MenubarShortcut><Mail /></MenubarShortcut>
                    </MenubarItem>
                </Link>
            </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger>Admission</MenubarTrigger>
            <MenubarContent>
                <Link to="/BbaProgramAdmission">
                    <MenubarItem>BBA Program</MenubarItem>
                </Link>
                <Link>
                    <MenubarItem>MBA Program <span className="text-sm text-slate-500">(BBA Graduates)</span></MenubarItem>
                </Link>
                <Link>
                    <MenubarItem>MBA Program <span className="text-sm text-slate-500">(Evening)</span></MenubarItem>
                </Link>
                <Link>
                    <MenubarItem>MBA Program <span className="text-sm text-slate-500">(Executive)</span></MenubarItem>
                </Link>
                <Link>
                    <MenubarItem>M.Phid</MenubarItem>
                </Link>
                <Link>
                    <MenubarItem>PhD</MenubarItem>
                </Link>
            </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
                <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
                <MenubarCheckboxItem checked>
                    Always Show Full URLs
                </MenubarCheckboxItem>
                <MenubarSeparator />
                <MenubarItem inset>
                    Reload <MenubarShortcut>⌘R</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled inset>
                    Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Hide Sidebar</MenubarItem>
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
                <MenubarItem inset>Edit...</MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Add Profile...</MenubarItem>
            </MenubarContent>
        </MenubarMenu>
    </>
    return (
        <Menubar className="sticky top-0 z-50 bg-card/50 backdrop-blur-md">
            <div className="flex items-center gap-2">
                <img src={img} className="w-8 object-cover" alt="IBA logo" />
                <h1 className="text-xl">IBA</h1>
                {/* Mobile Drawer Menu */}
                <div className="sm:hidden ml-2">
                    <Sheet open={isOpen} onOpenChange={setIsOpen} side="left">
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="cursor-pointer">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="p-4 bg-card" side="left">
                            <SheetTitle className="sr-only">My Hidden Sheet Title</SheetTitle>
                            <SheetDescription>Contents</SheetDescription>
                            <Menubar className="flex flex-col rounded-lg bg-muted">
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
                <Link to="/login">
                    <Button className="cursor-pointer">Login</Button>
                </Link>
            </div>
        </Menubar>

    );
};

export default Navbar;