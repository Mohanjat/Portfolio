import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 900) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`container nav_bar ${isOpen ? 'menu-open' : ''}`}>
            <div className="nav_left nav_items">Portfolio</div>

            <div className="hamburger" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <div className={`nav_right ${isOpen ? 'nav-open' : ''}`}>
                <a href="#home" className="nav_items" onClick={closeMenu}>Home</a>
                <a href="#experience" className="nav_items" onClick={closeMenu}>Experience</a>
                <a href="#skills" className="nav_items" onClick={closeMenu}>Skills</a>
                <a href="#projects" className="nav_items" onClick={closeMenu}>Projects</a>
                <a href="#contact" className="nav_items" onClick={closeMenu}>Contact</a>
            </div>
        </div>
    );
}

export default Navbar;












// import React, { useState } from 'react';

// const Navbar = () => {

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className="container nav_bar" data-aos="fade-down" data-aos-duration="1000">

//             <div className="left nav_items">Portfolio</div>

//             <div className="right">

//                 <a href="#home" className="nav_items">Home</a>
//                 <a href="#experience" className="nav_items">Experience</a>
//                 <a href="#skills" className="nav_items">Skills</a>
//                 <a href="#projects" className="nav_items">Projects</a>
//                 <a href="#contact" className="nav_items">Contact</a>
//             </div>
//         </div>
//     );
// }

// export default Navbar;
