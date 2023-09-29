// ./test-utils/render.tsx
import { MantineProvider } from "@mantine/core";
import { render as testingLibraryRender } from "@testing-library/react";

export function render(ui) {
  return testingLibraryRender(ui, {
    wrapper: ({ children }) => <MantineProvider>{children}</MantineProvider>,
  });
}
