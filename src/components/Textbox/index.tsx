import { FC, forwardRef } from "react";
import { TextboxProps } from "./textboxProps";

import styles from "./textbox.module.css";

const Textbox: FC<TextboxProps> = forwardRef((props, ref) => {
	const { className, style, placeholder, shape = "normal", disabled, onChange, value, required, ...rest } = props;
	return (
		<input
			ref={ref}
			className={`${styles.textbox} ${styles[`textbox_${shape}`]} ${
				disabled ? styles.textbox_disabled : null
			} ${className}`}
			style={style}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			disabled={disabled ? disabled : false}
			{...rest}
		/>
	);
});

export default Textbox;

