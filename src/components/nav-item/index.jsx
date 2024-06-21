import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavItem = ({ to, children, activeStyle = {} }) => {
	return (
		<NavLink
			className={"cursor-pointer underline-offset-4"}
			to={to}
			style={({ isActive }) => (isActive ? activeStyle : undefined)}
		>
			{children}
		</NavLink>
	);
};

NavItem.propTypes = {
	to: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	activeStyle: PropTypes.object,
};

export { NavItem };
