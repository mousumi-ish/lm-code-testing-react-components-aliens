interface PlanetNameProps {
  planetName: string;
  onChangePlanetName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SpeciesName: React.FC<PlanetNameProps> = ({
  planetName,
  onChangePlanetName,
}) => (
  <>
    <label htmlFor="planetName">Species Name</label>
    <input
      type="text"
      id="planetName"
      // className="speciesName"
      value={planetName}
      onChange={(e) => onChangePlanetName(e)}
    />
  </>
);

export default SpeciesName;
