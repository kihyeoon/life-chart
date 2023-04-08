import Popover from "./Popover";

export default {
  title: "Chart/Popover",
  component: Popover,
};

function Template(args) {
  return <Popover {...args} />;
}

export const PrimaryTemplate = Template.bind({});

PrimaryTemplate.args = {
  showPopover: true,
  age: 20,
  dateRange: "2020-01-01 - 2020-01-31",
};
