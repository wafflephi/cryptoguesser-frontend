import React from "react";

const Header = (props) => {
	return (
		<p className={"text-slate-800 font-bold mb-5 " + props.fontSize}>
			{props.children}
		</p>
	);
};

export default Header;
