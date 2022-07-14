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
      <h1> Favoruite Food</h1>
      <div className="food-feed">
        <Card></Card>
      </div>
    </div>
  );
}

export default App;
