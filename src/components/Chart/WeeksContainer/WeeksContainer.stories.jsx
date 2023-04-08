import WeeksContainer from "./WeeksContainer";

export default {
  title: "Chart/WeeksContainer",
  component: WeeksContainer,
};

function Template(args) {
  return <WeeksContainer {...args} />;
}

export const PrimaryTemplate = Template.bind({});

PrimaryTemplate.args = { birthDate: "1993-06-30", years: 100 };
