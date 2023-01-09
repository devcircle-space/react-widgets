import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "..";

export default {
	title: "Components/Button",
	component: Button,
	args: {
		label: "Click Me",
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
	btnStyle: "primary",
};
Secondary.args = {
	btnStyle: "secondary",
};
