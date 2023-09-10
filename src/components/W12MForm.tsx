import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./Species_Name";
import PlanetName from "./Planet_Name";
import NumberOfBeings from "./Number_Of_Beings";
import CheckIfRobot from "./Check_If_Robot";
import ReasonForSparing from "./Reason_Of_Sparing";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState<string>("humans");
  const [planetName, setPlanetName] = useState<string>("Earth");
  const [numberOfBeings, setNumberOfBeings] = useState<number>(1000);
  const [checkIfRobot, setCheckIfRobot] = useState<string>("4");
  const [reasonForSparing, setReasonForSparing] = useState<string>(
    "List reason for sparing..."
  );

  return (
    <section className="w12MForm">
      <W12MHeader />
      {/* REST OF FORM GOES HERE */}

      <form>
        <div>
          <SpeciesName
            speciesName={speciesName}
            onChangeSpeciesName={(e) => setSpeciesName(e.target.value)}
          />
        </div>
        <div>
          <PlanetName
            planetName={planetName}
            onChangePlanetName={(e) => setPlanetName(e.target.value)}
          />
        </div>
        <div>
          <NumberOfBeings
            numberOfBeings={numberOfBeings}
            onChangeNumberOfBeings={(e) => setNumberOfBeings(numberOfBeings)}
          />
        </div>
        <div>
          <CheckIfRobot
            checkIfRobot={checkIfRobot}
            onChangeCheckIfRobot={(e: any) => setCheckIfRobot(e.target.value)}
          />
        </div>
        <div>
          <ReasonForSparing
            reasonForSparing={reasonForSparing}
            onChangeReasonForSparing={(e: any) =>
              setReasonForSparing(e.target.value)
            }
          />
        </div>
        <div className="container">
          <input
            type="submit"
            className="submit"
            id="submit"
            placeholder="Submit"
          />
        </div>
      </form>
    </section>
  );
};

export default W12MForm;
