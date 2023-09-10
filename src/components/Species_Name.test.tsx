import { ChangeEvent } from "react";
import SpeciesName from "./Species_Name";
import { render, screen } from "@testing-library/react";
describe("Species Name", () => {
  test("renders header text", () => {
    const propSpecies = {
      label: "Species Name : ",
      id: "speciesName",
      placeholder: "Species Name..",
      name: "speciesName",
      onChangeName: jest.fn(),
    };
    render(
      <SpeciesName
        speciesName={""}
        onChangeSpeciesName={function (e: ChangeEvent<HTMLInputElement>): void {
          throw new Error("Function not implemented.");
        }}
        {...propSpecies}
      />
    );
    const labelText = screen.getByText(/Species Name/i);
    expect(labelText).toBeInTheDocument();
  });
});
