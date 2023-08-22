import { render, screen } from "@testing-library/vue";
import { composeStory } from "@storybook/testing-vue3";
import Meta, {
  Primary as PrimaryStory,
} from "../../src/stories/Button.stories";

// Returns a component that already contain all decorators from story level, meta level and global level.
const Primary = composeStory(PrimaryStory, Meta);

test("onclick handler is called", async () => {
  const onClickSpy = jest.fn();
  render(Primary({ onClick: onClickSpy }));
  const buttonElement = screen.getByRole("button");
  buttonElement.click();
  expect(onClickSpy).toHaveBeenCalled();
});
