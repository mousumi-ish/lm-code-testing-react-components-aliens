import { useState } from "react";

export interface CheckIfRobotProps {
  checkIfRobot: any;
  onChangeCheckIfRobot: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const CheckIfRobot: React.FC<CheckIfRobotProps> = ({
  checkIfRobot,
  onChangeCheckIfRobot,
}) => {
  return (
    <>
      <label htmlFor="checkIfRobot">What is 2 + 2 :</label>
      <select
        id="checkIfRobot"
        value={checkIfRobot}
        onChange={(e) => {
          onChangeCheckIfRobot(e);
        }}
      >
        <option value="4">4</option>
        <option value="Not 4">Not 4</option>
      </select>
    </>
  );
};
export default CheckIfRobot;
