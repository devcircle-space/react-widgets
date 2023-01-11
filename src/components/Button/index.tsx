import { forwardRef, type FC } from "react";
import { ButtonProps } from "./buttonProps";

import styles from "./button.module.css";

const Button: FC<ButtonProps> = forwardRef((props, ref) => {
	const { className, style, onClick, label, btnStyle = "primary",size="normal", shape="normal",disabled, ...rest } = props;
	return (
		<button
			ref={ref}
			className={`${styles.button} ${styles[`button_${btnStyle}`]} ${styles[`button_${size}`]} ${styles[`button_${shape}`]} ${disabled ? styles.button_disabled : null} ${className}`}
			style={style}
			onClick={onClick}
			disabled={disabled}
			{...rest}>
			{label}
		</button>
	);
});

Button.displayName = "Button";

export default Button;
