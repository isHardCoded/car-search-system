import "./List.css";
import Cars from "../../data/carsData";
import Card from "../Card/Card";
import Search from "../Search/Search";
import { useState } from "react";

const List = () => {
  const [searchItem, setSearchItem] = useState("");

  const handleInputChange = (event) => {
    setSearchItem(event.target.value);
  };

  const filteredCars = Cars.filter((item) =>
    item.Name.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="wrapper">
      <Search searchItem={searchItem} handleInputChange={handleInputChange} />
      <ul className="car-list">
        {filteredCars.map((item) => (
          <li key={item.Id}>
            <Card
              name={item.Name.toUpperCase()}
              miles_per_gallon={item.Miles_per_Gallon}
              cylinders={item.Cylinders}
              displacement={item.Displacement}
              horsepower={item.Horsepower}
              weight_in_lbs={item.Weight_in_lbs}
              acceleration={item.Acceleration}
              year={item.Year}
              origin={item.Origin}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
