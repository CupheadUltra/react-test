
import './App.css';


function App() {
  let myName = "Андрій";

  let favoriteSite = {
    name: "Google",
    url: "https://www.google.com/",
  };
  let num1 = 10;
  let num2 = 25;
  let sum = num1 + num2;

  let colors = ["Червоний", "Синій", "Зелений"];

  return (
    <div>
      <h1>{myName}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img
        src="https://picsum.photos/300/200"
        alt="Випадкове зображення"
      />
      <p>
        Улюблений сайт:{" "}
        <a href={favoriteSite.url} target="_blank" rel="noreferrer">
          {favoriteSite.name}
        </a>
      </p>
      <p>Сума чисел: {sum}</p>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
}


export default App;
