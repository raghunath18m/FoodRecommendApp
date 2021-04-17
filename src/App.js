import "./styles.css";
import { useState } from "react";

const foodDB = {
  NorthIndian: [
    {
      name: "Chole Bhature",
      rating: "4/5"
    },
    {
      name: "Daal Makhni",
      rating: "3.5/5"
    }
  ],

  SouthIndian: [
    {
      name: "Dosa",
      rating: "5/5"
    },
    {
      name: "Vada",
      rating: "4.5/5"
    }
  ],
  Maharashtrian: [
    {
      name: "Vada Pav",
      rating: "4.1/5"
    },
    {
      name: "Pav Bhaji",
      rating: "4.2/5"
    }
  ]
};

export default function App() {
  const [selectedType, setType] = useState("SouthIndian");
  function typeClickHandler(type) {
    setType(type);
  }
  return (
    <div className="App">
      <h1> 🍔 Food Recommendation </h1>
      <p>
        {" "}
        Checkout my favorite Food items. Select a Cuisine type to get started{" "}
      </p>

      <div>
        {Object.keys(foodDB).map((type) => (
          <button
            onClick={() => typeClickHandler(type)}
            style={{
              cursor: "pointer",
              backgroundColor: "orange",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "2px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {type}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {foodDB[selectedType].map((food) => (
            <li
              key={food.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {food.name} </div>
              <div style={{ fontSize: "smaller" }}> {food.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
