import ThemeToggle from "./ThemeToggle";

export default {
  title: "Components/Toggle",
  component: ThemeToggle,
};

function Template(args) {
  return <ThemeToggle {...args} />;
}

export const PrimaryTemplate = Template.bind({});

PrimaryTemplate.args = {
  menuArr: ["🌝", "🌚"],
};
