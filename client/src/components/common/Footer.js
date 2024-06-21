const Footer = () => {
	const link = "https://henok.us";
	const target = "_blank";

	return (
		<div className="container">
			Copyright © <small>{new Date().getFullYear()}</small> T.Duarte {" "}
			<a href={link} target={target}>
				T.DUARTE 
			</a>
		</div>
	);
};

export default Footer;
