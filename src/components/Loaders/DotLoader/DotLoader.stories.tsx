import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DotLoader } from ".";

export default {
	title: "Components/Loaders",
	component: DotLoader,
	argsType: {
		displayMode: { control: "radio" },
	},
} as ComponentMeta<typeof DotLoader>;

const Template: ComponentStory<typeof DotLoader> = (args) => <DotLoader {...args} />;

export const Normal = Template.bind({});
export const Overlay = Template.bind({});

Normal.args = {
	displayMode: "normal",
};
Overlay.args = {
	displayMode: "overlay",
};
