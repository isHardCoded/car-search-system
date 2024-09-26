import "./Card.css";

const Card = ({
  name,
  miles_per_gallon,
  cylinders,
  displacement,
  horsepower,
  weight_in_lbs,
  acceleration,
  year,
  origin,
}) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <ul>
        <li>Miles Per Gallon: {miles_per_gallon}</li>
        <li>Cylinders: {cylinders}</li>
        <li>Displacement: {displacement}</li>
        <li>Horsepower: {horsepower}</li>
        <li>weight_in_lbs: {weight_in_lbs}</li>
        <li>Acceleration: {acceleration}</li>
        <li>Year: {year}</li>
        <li>Origin: {origin}</li>
      </ul>
    </div>
  );
};
export default Card;
