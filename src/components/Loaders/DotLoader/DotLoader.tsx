import { FC, ComponentPropsWithRef } from "react";

import styles from "./loader.module.css";

export type LoaderDisplayMode = "normal" | "overlay";
export interface DotLoaderProps extends ComponentPropsWithRef<"div"> {
	displayMode?: LoaderDisplayMode;
}

const DotLoaderComponent: FC = () => {
	return (
		<div className={`${styles.dot_loader_container}`}>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

const DotLoader: FC<DotLoaderProps> = (props) => {
	const { displayMode = "normal" } = props;
	if (displayMode === "overlay")
		return (
			<div className={`${styles.dot_loader_overlay}`}>
				<DotLoaderComponent />
			</div>
		);
	return <DotLoaderComponent />;
};

export default DotLoader;
