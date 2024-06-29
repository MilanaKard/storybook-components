import { Meta, StoryFn } from "@storybook/react";
import Button, { ButtonProps } from "./Button";
import "../../styles/_reset.css";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      description: "Вариант внешнего вида кнопки",
      type: "string",
      defaultValue: "primary",
      options: ["primary", "secondary"],
      control: {
        type: "radio",
      },
    },
    size: {
      description: "Размер кнопки",
      type: "number",
      defaultValue: 36,
      options: [28, 36, 56],
      control: {
        type: "radio",
      },
    },
    state: {
      description: "Состояние кнопки",
      type: "string",
      defaultValue: "enabled",
      options: ["enabled", "loading", "disabled"],
      control: {
        type: "radio",
      },
    },
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>
    <Button.Label text="Что сделать" />
    <Button.Counter stroke={false} quantity="3" pulse={false} />
  </Button>
);

const ButtonTemplate: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>
    <Button.Label text="Что сделать" />
    <Button.Counter stroke={false} quantity="123" pulse={false} />
  </Button>
);

const ShrunkButtonTemplate: StoryFn<ButtonProps> = (args) => (
  <div style={{ width: 170, height: 100, background: 'grey'}}>
    <Button {...args}>
      <Button.Label text="Что сделать" />
      <Button.Counter stroke={false} quantity="123" pulse={false} />
    </Button>
  </div>
);

const TemplateLabelOnly: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>
    <Button.Label text="Что сделать" />
  </Button>
);

export const Default = TemplateLabelOnly.bind({});
Default.args = {
  variant: "primary",
  size: 36,
  state: "enabled",
};

export const DefaultWithCounter = Template.bind({});
DefaultWithCounter.args = {
  variant: "primary",
  size: 36,
  state: "enabled",
};

export const SecondaryWithCounter = ButtonTemplate.bind({});
SecondaryWithCounter.args = {
  variant: "secondary",
  size: 56,
  state: "enabled",
};

export const Shrunk = ShrunkButtonTemplate.bind({});
Shrunk.args = {
  variant: "primary",
  size: 56,
  state: "enabled",
};

export const SecondaryLargeLoading = Template.bind({});
SecondaryLargeLoading.args = {
  variant: "secondary",
  size: 56,
  state: "loading",
};

export const PrimarySmallDisabled = Template.bind({});
PrimarySmallDisabled.args = {
  variant: "primary",
  size: 28,
  state: "disabled",
};
