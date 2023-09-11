import { render, screen } from "@testing-library/react";
import SpeciesName, { SpeciesNameProps } from "./Species_Name";
import user from "@testing-library/user-event";

describe("Testing for the SpeciesName component", () => {
  test("Given the required props, When the component is rendered, Then the label and input should be present", () => {
    const props: SpeciesNameProps = {
      speciesName: "speciesName",
      onChangeSpeciesName: jest.fn(),
    };

    render(<SpeciesName {...props} />);
    const speciesNamelabel = screen.getByText(/Species Name:/i);
    expect(speciesNamelabel).toBeInTheDocument();
  });
});
