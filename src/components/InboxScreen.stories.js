import React from "react";
import { Provider } from "react-redux";
import { action } from "@storybook/addon-actions";
import { PureInBoxScreen } from "./InboxScreen";
import * as TaskListStories from "./TaskList.stories";

const store = {
  getState: () => {
    return {
      tasks: TaskListStories.Default.args.tasks,
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
};

export default {
  component: PureInBoxScreen,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  title: "InBoxScreen",
};

const Template = (args) => <PureInBoxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});

Error.args = {
  error: "Something",
};
