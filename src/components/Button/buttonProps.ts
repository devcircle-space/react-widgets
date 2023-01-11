import { ComponentPropsWithRef } from "react";

export type ButtonStyle = "primary" | "secondary" | "outline" | "danger";

export interface ButtonProps extends ComponentPropsWithRef<"button"> {
	label: string;
	btnStyle?: ButtonStyle;
}
