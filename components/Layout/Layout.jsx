import Footer from "./Footer";
import Header from "./Header";
import Content from "../Content";

export default function Layout(props) {
	return (
		<div>
			<Header />
			<div className='h-screen'>{props.children}</div>
			<Footer />;
		</div>
	);
}
