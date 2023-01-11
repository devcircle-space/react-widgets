import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "..";

export default {
	title: "Components/Button",
	component: Button,
	args: {
		label: "Click Me",
	},
	argTypes: {
		onClick: { action: "clicked" },
		btnStyle: { control: "select" },
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Outline = Template.bind({});
export const Danger = Template.bind({});

Primary.args = {
	btnStyle: "primary",
};
Secondary.args = {
	btnStyle: "secondary",
};
Outline.args = {
	btnStyle: "outline",
};
Danger.args = {
	btnStyle: "danger",
};
