import AgePicker from "./AgePicker";

export default {
  title: "@shared/AgePicker",
  component: AgePicker,
};

function Template(args) {
  return <AgePicker {...args} />;
}

export const PrimaryTemplate = Template.bind({});

// PrimaryTemplate.args = {
//   styleType: "primary",
//   children: "보러가기",
// };
