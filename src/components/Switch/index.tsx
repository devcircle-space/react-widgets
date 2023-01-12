import { FC, forwardRef, useState } from "react";
import { SwitchProps } from "./switchProps";

import styles from "./switch.module.css";

const Switch: FC<SwitchProps> = forwardRef((props, ref) => {
	const { className, style, onClick, onChange, checked, ...rest } = props;
	const [isChecked, setIsChecked] = useState(checked);

	return (
		<>
			<div role="switch" className={`${styles.switch_container} ${className}`} style={style}>
				<div className={`${styles.switch_track} ${isChecked ? styles.active : null}`}>
					<div
						className={`${styles.switch_thumb} ${!isChecked ? styles.switch_thumb_off : styles.switch_thumb_on}`}
						onClick={onClick ? onClick : () => setIsChecked(!isChecked)}></div>
				</div>
			</div>
			<input type="checkbox" ref={ref} checked={isChecked} onChange={() => {}} hidden {...rest} />
		</>
	);
});

export default Switch;

