import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./Species_Name";
import PlanetName from "./planet_name";
const [speciesName, setSpeciesName] = useState("humans");
const W12MForm = () => {
  return (
    <section className="w12MForm">
      <W12MHeader />
      {/* REST OF FORM GOES HERE */}

      <form>
        <SpeciesName
          speciesName={SpeciesName}
          onChangeSpeciesName={(e: any) => setSpeciesName(e.target.value)}
        />

        <div className="container">
          <button type="button" className="btn" id="btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default W12MForm;
