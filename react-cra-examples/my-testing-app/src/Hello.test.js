import { render, screen } from "@testing-library/react";
import { Hello } from "./Hello";
// render(component): it renders the component in the testing platform
// screen: provides methods that can read the content after rendering like getByText()

// to write the test case we use a test(description, callback) method
// test() is called when you use npm test
test("Hello component must have Welcome content", () => {
  //first render the component using render()
  render(<Hello />);
  const text = screen.getByText(/Welcome/);
  //now we must use expect() to check the pattern is present
  expect(text).toBeInTheDocument();
});