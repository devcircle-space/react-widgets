import { ComponentPropsWithRef } from "react";

export type TextboxShape = "normal" | "rounded";

export interface TextboxProps extends ComponentPropsWithRef<"input"> {
	shape?: TextboxShape;
}

