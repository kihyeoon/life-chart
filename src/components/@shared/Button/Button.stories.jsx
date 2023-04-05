import Button from "./Button";

export default {
  title: "@shared/Button",
  component: Button,
};

function Template(args) {
  return <Button {...args} />;
}

export const PrimaryTemplate = Template.bind({});
export const SecondaryTemplate = Template.bind({});
export const TertiaryTemplate = Template.bind({});

PrimaryTemplate.args = {
  styleType: "primary",
  children: "보러가기",
};

SecondaryTemplate.args = {
  styleType: "secondary",
  children: "보러가기",
};

TertiaryTemplate.args = {
  styleType: "tertiary",
  children: "보러가기",
};
