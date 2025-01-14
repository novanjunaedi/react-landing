const NavItem = ({ title, href }) => {
    // const pathname = usePathname();

    // Check if the current path is the homepage
    // const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

    return (
        <a href={href}>
            {title}
        </a>
    );
};

export default NavItem;
