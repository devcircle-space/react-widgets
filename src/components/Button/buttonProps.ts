import { ComponentPropsWithRef } from "react";

export type ButtonStyle = "primary" | "secondary" | "outline" | "danger";
export type ButtonSize = "normal" | "big";
export type ButtonShape = "normal" | "rounded" | "pill";
export interface ButtonProps extends ComponentPropsWithRef<"button"> {
	label: string;
	btnStyle?: ButtonStyle;
	size?: ButtonSize;
	shape?: ButtonShape;
}
