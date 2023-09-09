import { useState } from "react";

export interface NumberOfBeingsProps {
  numberOfBeings: number;
  onChangeNumberOfBeings: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({
  numberOfBeings,
  onChangeNumberOfBeings,
}) => {
  return (
    <>
      <label htmlFor="numberOfBeings">Number of Beings : </label>
      <input
        type="number"
        id="numberOfBeings"
        value={numberOfBeings}
        onChange={(e) => {
          onChangeNumberOfBeings(e);
        }}
      />
    </>
  );
};

export default NumberOfBeings;
