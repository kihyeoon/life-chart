import WeekDot from "./WeekDot";

export default {
  title: "Chart/WeekDot",
  component: WeekDot,
};

function Template(args) {
  return <WeekDot {...args} />;
}

export const PrimaryTemplate = Template.bind({});

PrimaryTemplate.args = {
  styleType: "past",
};
