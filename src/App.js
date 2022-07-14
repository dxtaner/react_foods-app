import axios from "axios";
import { useEffect,useState } from "react";
import Card from "./components/Card";


const App = () => {

  const [foods,setFoods] = useState(null);

  const fetchData = async () => {
    const foodData = await axios.get('http://localhost:8000/foods')
    const data = Object.keys(foodData.data.data).map(food => foodData.data.data[food])
    setFoods(data)
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className="App">
      <h1> Favourite Food</h1>
      <div className="food-feed">
        {foods?.map(food => <Card key={food.id} food={food} />)}
      </div>
    </div>
  );
}

export default App;
