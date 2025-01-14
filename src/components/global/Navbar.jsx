import { FaBars } from "react-icons/fa";
import NavItem from "./NavItem";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [background, setBackground] = useState(false);

    useEffect(() => {
        const addBackground = () => {
            if (window.scrollY >= 80) {
                setBackground(true);
            } else {
                setBackground(false);
            }
        };

        window.addEventListener('scroll', addBackground);
        return () => window.removeEventListener('scroll', addBackground);
    }, []);

    const navItems = [
        {
            title: "Products",
            href: "#products",
        },
        {
            title: "Careers",
            href: "#careers",
        },
        {
            title: "About Us",
            href: "#about",
        }
    ];

    return (
        <nav className={`w-full sticky top-0 z-20 ${background ? 'bg-primary text-white shadow-2xl' : 'bg-transparent text-foreground'}`}>
            <div className="container mx-auto">
                <div className="flex items-center justify-between py-4">
                    {/* Left Section */}
                    <div className="flex items-center">
                        <a href="#top">
                            <h1>Logo</h1>
                        </a>
                    </div>

                    {/* Center Section */}
                    <div className="hidden lg:flex items-center ms-auto gap-4">
                        <ul className="flex items-center gap-10">
                            {navItems.map((item) => (
                                <li key={item.title}>
                                    <NavItem
                                        title={item.title}
                                        href={item.href}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-4">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="icon" className="lg:hidden">
                                    <FaBars />
                                </Button>
                            </SheetTrigger>
                            <SheetContent>
                                <ul className="grid gap-3">
                                    {navItems.map((item) => (
                                        <li key={item.title}>
                                            <NavItem
                                                title={item.title}
                                                href={item.href}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
