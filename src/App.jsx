import { useEffect, useState } from "react"
import Display from "./Display"
import SearchBox from "./SearchBox"

function App() {

  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState();
  const [history, setHistory] = useState([]);

  function recieveData(value) {
    // console.log(value);
    setSearch(value);
  }

  const exists = async () => {
    let API = "";

    if (history.includes(search.toLowerCase())) {
      return (
        console.log("data exists")
      )
    }
    else {
      API = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=21805bff7224936fa25d6cec016a0a4b&units=metric`;

    }

    const response = await fetch(API);
    const data = await response.json();
    console.log(data);
    setWeatherData(data);
    setHistory([...history, data]);

  }


  const apiData = () => {
    if (!search && search.trim() === "") {
      console.log("enter valid city name")
    } else {
      exists();
    }



  }

  useEffect(
    () => {
      apiData();
    }, [search]
  )


  return (
    <div className="pt-5"
      style={{
        backgroundImage: `url('/images/blue.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}>

      <div className="mx-auto border p-4 rounded-top shadow-lg pt-4 custom-bg w-75 w-sm-25 w-md-75 mx-2">
        <SearchBox recieveHandler={recieveData} />
        <Display weatherData={weatherData} />
      </div>

    </div>
  )
}

export default App


