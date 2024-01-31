import { React } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "./Footer.css";

const Footer = (props) => {
	return (
		<div id="footer">
			<div>
				Made with <FavoriteIcon fontSize="small" color="danger" /> by{" "}
				<a href="https://github.com/ayaamdouni">Aya Amdouni </a>			
			</div>
		</div>
	);
};

export default Footer;