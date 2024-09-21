const navbarData = {
    navbardata: [
        {
            title: "Toast Community Hub",
            url: "/Toast Community Hub",
            subnav: [
                { title: "Toast Community Hub", url: "/Toast Community Hub" }
            ]
        },
        {
            title: "Advocacy",
            url: "/Advocacy",
            subnav: [
                { title: "Customer Advisory Board", url: "/Customer Advisory Board" },
                { title: "Community Ambassador", url: "/Community Ambassador" }
            ]
        },
        {
            title: "Product Hub",
            url: "/Product Hub",
            subnav: [
                { title: "Product Updates *NEW*", url: "/Product Updates *NEW*" },
                { title: "Test Kitchen Beta Discussions", url: "/Test Kitchen Beta Discussions" }
            ]
        },
        {
            title: "iTalent Test",
            url: "/Product Hub",
            subnav: [
                { title: "iTalent Forum", url: "/iTalent Forum" }
            ]
        }
    ]
};

// Function to create nav items dynamically
function createNavItem(navItemData) {
    const navItem = document.createElement('li');
    navItem.classList.add('nav-item');
    navItem.textContent = navItemData.title;

    if (navItemData.subnav && navItemData.subnav.length > 0) {
        const dropdownIcon = document.createElement('span');
        dropdownIcon.classList.add('dropdown-icon');
        dropdownIcon.textContent = '▼'; // Add dropdown icon
        navItem.appendChild(dropdownIcon);

        const subnav = document.createElement('ul');
        subnav.classList.add('subnav');

        navItemData.subnav.forEach(subItem => {
            const subnavItem = document.createElement('li');
            subnavItem.classList.add('subnav-item');
            const subnavLink = document.createElement('a');
            subnavLink.href = subItem.url;
            subnavLink.textContent = subItem.title;
            subnavItem.appendChild(subnavLink);
            subnav.appendChild(subnavItem);
        });

        navItem.appendChild(subnav);
    }

    return navItem;
}

// Function to create "More" dropdown
function createMoreNav(moreNavItems) {
    const moreNavItem = document.createElement('li');
    moreNavItem.classList.add('nav-item', 'more-nav-item');
    moreNavItem.textContent = 'More';

    const moreNav = document.createElement('ul');
    moreNav.classList.add('more-nav');

    moreNavItems.forEach(item => {
        const moreItem = document.createElement('li');
        moreItem.classList.add('more-nav-item');
        moreItem.textContent = item.title;

        const subnav = document.createElement('ul');
        subnav.classList.add('subnav');

        item.subnav.forEach(subItem => {
            const subnavItem = document.createElement('li');
            subnavItem.classList.add('subnav-item');
            const subnavLink = document.createElement('a');
            subnavLink.href = subItem.url;
            subnavLink.textContent = subItem.title;
            subnavItem.appendChild(subnavLink);
            subnav.appendChild(subnavItem);
        });

        moreItem.appendChild(subnav);
        moreNav.appendChild(moreItem);

        // Add hover event listeners to control subnav visibility
        moreItem.addEventListener('mouseenter', () => {
            subnav.style.display = 'block'; // Show subnav
        });
        moreItem.addEventListener('mouseleave', () => {
            subnav.style.display = 'none';  // Hide subnav
        });
    });

    moreNavItem.appendChild(moreNav);

    // Add hover event listeners to control more nav visibility
    moreNavItem.addEventListener('mouseenter', () => {
        moreNav.style.display = 'block';  // Show more nav
    });
    moreNavItem.addEventListener('mouseleave', () => {
        moreNav.style.display = 'none';   // Hide more nav
    });

    return moreNavItem;
}

// Main function to initialize the navbar
function initializeNavbar() {
    const navbarList = document.getElementById('navbarList');

    // Add first two items directly
    navbarData.navbardata.slice(0, 2).forEach(item => {
        const navItem = createNavItem(item);
        navbarList.appendChild(navItem);
    });

    // Add the rest to "More" dropdown
    const moreNavItems = navbarData.navbardata.slice(2);
    const moreNav = createMoreNav(moreNavItems);
    navbarList.appendChild(moreNav);
}

// Initialize the navbar when the page loads
initializeNavbar();
