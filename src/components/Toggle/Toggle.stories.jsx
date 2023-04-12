import Toggle from "./Toggle";

export default {
  title: "Components/Toggle",
  component: Toggle,
};

function Template(args) {
  return <Toggle {...args} />;
}

export const PrimaryTemplate = Template.bind({});

PrimaryTemplate.args = {
  menuArr: ["🌝", "🌚"],
  currentIdx: 0,
  onClick: () => {},
};
