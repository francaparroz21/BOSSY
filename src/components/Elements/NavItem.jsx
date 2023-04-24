import { NavLink } from 'react-router-dom'

const NavItem = ({ link, svg, svgActive, isActive, onClick }) => {

    return (
        <>
            <li className='mt-auto'>
                <NavLink
                    to={`${link}`}
                    onClick={onClick}
                    className={({ isActive }) => {
                        return (
                            "block py-1 border-b-4 transition-all" +
                            (isActive
                                ? " border-palette-Auburn"
                                : " border-transparent")
                        )
                    }}
                >
                    {isActive ? svgActive : svg}
                </NavLink>
            </li>
        </>
    )
}

export default NavItem