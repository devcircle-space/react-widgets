import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Textbox } from "..";

export default {
	title: "Components/Textbox",
	component: Textbox,
	args: {
		value: "",
	},
	argTypes: {
		value: { control: "text" },
		disabled: { control: "boolean" },
	},
} as ComponentMeta<typeof Textbox>;

const Template: ComponentStory<typeof Textbox> = (args) => <Textbox {...args} />;

export const Primary = Template.bind({});

