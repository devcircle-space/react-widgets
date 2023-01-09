import { forwardRef, type FC } from "react";
import { ButtonProps } from "./buttonProps";

import styles from "./button.module.css";

const Button: FC<ButtonProps> = forwardRef((props, ref) => {
	const { className, style, onClick, label, btnStyle = "primary", ...rest } = props;
	return (
		<button
			ref={ref}
			className={`${styles.button} ${styles[`button_${btnStyle}`]} ${className}`}
			style={style}
			onClick={onClick}
			{...rest}>
			{label}
		</button>
	);
});

Button.displayName = "Button";

export default Button;
