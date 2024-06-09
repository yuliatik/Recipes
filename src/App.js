import { useEffect, useState} from "react";
import video from './food.mp4';
import './App.css';
import MyRecipesComponent from './MyRecipesComponent';

function App() {

  // const MY_ID = "8ddfbac8";
  // const MY_KEY = "a11ae19b2c43284f21dd802ad8262ef0";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);

useEffect(()=> {
  const getRecipe = async () => {
    const response = await fetch ('https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=8ddfbac8_key=a11ae19b2c43284f21dd802ad8262ef0');
    const data = await response.json();
    console.log(data);
    setMyRecipes(data.hits);
    }
    getRecipe();
}, [])

const myRecipeSearch = (e) => {
  setMySearch(e.target.value);
  }


  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
        </video>
          <h1>Find a Recipe</h1>
      </div>

      <div className='container'>

     <form>
         <input className="search" placeholder="Search..." onChange={myRecipeSearch} value={mySearch}/>
    </form>
</div>

<div className='container'>
     <button>
         <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon"/>
      </button>
</div>

    {myRecipes.map(element =>(
      <MyRecipesComponent/>
    ))}

  </div>
  );
}

export default App;
