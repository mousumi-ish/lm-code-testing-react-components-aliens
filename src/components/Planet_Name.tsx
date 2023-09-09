interface PlanetNameProps {
  planetName: string;
  onChangePlanetName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const PlanetName: React.FC<PlanetNameProps> = ({
  planetName,
  onChangePlanetName,
}) => (
  <>
    <label htmlFor="planetName">Planet Name</label>
    <input
      type="text"
      id="planetName"
      value={planetName}
      onChange={(e) => onChangePlanetName(e)}
    />
  </>
);

export default PlanetName;
