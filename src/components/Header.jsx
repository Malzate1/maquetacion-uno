import Logo from "./Logo"
import NavBar1 from "./NavBar1"


function Header() {
    return (
        <div>
            <div>
                <aside>
                    <Logo/>
                </aside>
            </div>
            <div>
                <NavBar1/>
            </div>
        </div>
    )
}

export default Header