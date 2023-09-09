import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./Species_Name";
import PlanetName from "./Planet_Name";
const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState<string>("humans");
  const [planetName, setPlanetName] = useState<string>("Earth");
  return (
    <section className="w12MForm">
      <W12MHeader />
      {/* REST OF FORM GOES HERE */}

      <form>
        <SpeciesName
          speciesName={speciesName}
          onChangeSpeciesName={(e) => setSpeciesName(e.target.value)}
        />
      </form>

      <PlanetName
        planetName={planetName}
        onChangePlanetName={(e) => setPlanetName(e.target.value)}
      />
    </section>
  );
};

export default W12MForm;
