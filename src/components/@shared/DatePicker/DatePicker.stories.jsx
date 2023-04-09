import DatePicker from "./DatePicker";

export default {
  title: "@shared/DatePicker",
  component: DatePicker,
};

function Template(args) {
  return <DatePicker {...args} />;
}

export const PrimaryTemplate = Template.bind({});

// PrimaryTemplate.args = {
//   styleType: "primary",
//   children: "보러가기",
// };
