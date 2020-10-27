const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");

const city_name = document.getElementById("city_name");

const temp_status = document.getElementById("temp_status");

const temp = document.getElementById("temp");

const datalayer = document.querySelector(".data-layer");

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;

  if (cityVal === "") {
    city_name.innerText = "Please write the name before search";
    datalayer.classList.add("data_hide");
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=65c169b3dc235a872c35925c49fe48ce`;
      const response = await fetch(url);
      const data = await response.json(); //CoDDnvert to object form
      const arrData = [data]; //Convert into array form
      city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
      temp.innerText = arrData[0].main.temp;
      temp_mood = arrData[0].weather[0].main;

      if (temp_mood == "Clear") {
        temp_status.innerHTML =
          "<i class='fa fa-sun-o' style='color:#F9D71C; font-size: 40px;'></i>";
      } else if (temp_mood == "Clouds") {
        temp_status.innerHTML =
          "<i class='fa fa-cloud' style='color:#BDD0E7; font-size: 40px;'></i>";
      } else if (temp_mood == "Rain") {
        temp_status.innerHTML =
          "<i class='fa fa-tint' style='color:#AFC3CC; font-size: 40px;'></i>";
      } else {
        ("<i class='fa fa-sun-o' style='color:#F9D71C; font-size: 40px;'></i>");
      }
    } catch (error) {
      city_name.innerText = "Please enter city name properly";
    }
  }
};

submitBtn.addEventListener("click", getInfo);
