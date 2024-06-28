import { Meta, StoryFn } from "@storybook/react";
import Counter, { CounterProps } from "./Counter";
import '../../App.styl'

export default {
  title: "Counter",
  component: Counter,
  argTypes: {
    variant: {
      description: "Вариант внешнего вида счетчика",
      type: "string",
      defaultValue: "primary",
      options: ["primary", "secondary"],
      control: {
        type: "radio",
      },
    },
    size: {
      description: "Размер счетчика",
      type: "number",
      defaultValue: 8,
      options: [8, 12, 16, 20, 24],
      control: {
        type: "radio",
      },
    },
    stroke: {
      defaultValue: true,
      control: "boolean",
    },
    quantity: {
      defaultValue: "1",
      control: "text",
    },
    pulse: {
      defaultValue: false,
      control: "boolean",
    },
  },
} as Meta;

const TemplatePrimary: StoryFn<CounterProps> = (args) => <div className="counters counters-light"><Counter {...args} /></div>;
const TemplateSecondary: StoryFn<CounterProps> = (args) => <div className="counters counters-dark"><Counter {...args} /></div>;

export const Primary = TemplatePrimary.bind({});
Primary.args = {
  variant: "primary",
  size: 16,
  stroke: true,
  quantity: "12",
  pulse: false,
};

export const Secondary = TemplateSecondary.bind({});
Secondary.args = {
  variant: "secondary",
  size: 20,
  stroke: true,
  quantity: "99+",
  pulse: true,
};

