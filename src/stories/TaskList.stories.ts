import type { Story, Meta } from "@storybook/vue3";
import TaskList from "./TaskList.vue";
import { userEvent, within, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
  title: "TaskList",
  component: TaskList,
  argTypes: {},
} as Meta;

const Template: Story = (args) => ({
  components: { TaskList },
  setup() {
    return args;
  },
  template: "<TaskList />",
});

export const Default = Template.bind({});
Default.args = {};

export const InputFilled = Template.bind({});
InputFilled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByLabelText("hihi"), "typing");
  await userEvent.click(canvas.getByRole("button", { name: "submit" }));

  await waitFor(async () => {
    const items = canvas.getAllByRole("listitem");
    await expect(items.length).toBe(1);
  });
};
