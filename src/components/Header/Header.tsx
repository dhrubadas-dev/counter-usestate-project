import Link from "next/link";
import ThemeToggleButton from "../ThemeToggleButton";
import { AuroraText } from "../magicui/aurora-text";

const Header = () => {
	return (
		<header
			className="fixed right-0 left-0 border-b shadow"
			aria-label="app-header">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
				<Link href={"/"}>
					<AuroraText className="text-2xl font-semibold">
						Counter State App
					</AuroraText>
				</Link>

				<nav className="flex items-center gap-4">
					<Link href={"/"}>Basic</Link>
					<Link href={"/advanced"}>Advanced</Link>
					<Link href={"/expert"}>Expert</Link>
					<Link href={"/atomic"}>Atomic</Link>

					<ThemeToggleButton />
				</nav>
			</div>
		</header>
	);
};

export default Header;
