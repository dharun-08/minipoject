import { Link, useMatch,useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return(
        <nav className="nav">
            <Link to="/" className="site-title">
                Bhoomi
            </Link>
            <ul>
                <CustomLink to="/purchase">Purchase</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
                <CustomLink to="/docs">Documentation</CustomLink>
            </ul>
        </nav>
    )
}
function CustomLink ({to,href,children,...props}) {
const resolvePath = useResolvedPath(to)
const isActive = useMatch({path: resolvePath.pathname,end: true })
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}