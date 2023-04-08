import Chart from "./Chart";

export default {
  title: "Chart/Chart",
  component: Chart,
};

function Template(args) {
  return <Chart {...args} />;
}

export const PrimaryTemplate = Template.bind({});

PrimaryTemplate.args = { birthDate: "1993-06-30", years: 100 };
