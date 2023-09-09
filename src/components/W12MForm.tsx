import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./Species_Name";
import PlanetName from "./Planet_Name";
import NumberOfBeings from "./Number_Of_Beings";
const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState<string>("humans");
  const [planetName, setPlanetName] = useState<string>("Earth");
  const [numberOfBeings, setNumberOfBeings] = useState<number>(1000);
  return (
    <section className="w12MForm">
      <W12MHeader />
      {/* REST OF FORM GOES HERE */}

      <form>
        <SpeciesName
          speciesName={speciesName}
          onChangeSpeciesName={(e) => setSpeciesName(e.target.value)}
        />

        <PlanetName
          planetName={planetName}
          onChangePlanetName={(e) => setPlanetName(e.target.value)}
        />
        <NumberOfBeings
          numberOfBeings={numberOfBeings}
          onChangeNumberOfBeings={(e) => setNumberOfBeings(numberOfBeings)}
        />
      </form>
    </section>
  );
};

export default W12MForm;
