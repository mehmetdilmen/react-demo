import {Nav, NavItem, NavLink} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => (
	<div>

      <Nav pills>
        <NavItem>
          <NavLink href="/">Question list</NavLink>
        </NavItem>


        <NavItem>
          <NavLink href="/new">Add new</NavLink>
        </NavItem>
      </Nav>
	</div>
);

export default Header;