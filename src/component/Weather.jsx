import GetWeather from "../hooks/GetWeather";
const Weather = props => {
  const {data, isSuccess, isLoading, isError, error} = GetWeather(props.city);
  return (
    <section id="weather-container">
      {isSuccess && 
        <div className='container-fluid mt-5 pt-4 position-relative'>
          <img id="weather-icon" src={`https://openweathermap.org/img/wn/${data["weather"][0]["icon"]}@2x.png`} alt="تصویر هوا"/>
          <h3 id="city-name" className="m-0">{data.name}</h3>
          <h1 id="weather-temp" className="mt-3 ms-1 display-3">{Math.floor(data["main"]["temp"])}°</h1>
          <h6 className="mt-2">{data["weather"][0]["description"]}</h6>
          <div className="container-fluid">
            <div id="sun-container" className="row">
              <img id="sun-image" src="./images/sun.png" alt="آیکون خورشید" />
            </div>
            <div className="d-flex justify-content-between">
              <h6>طلوع {timeObjectToString(convertUnixTime(data["sys"]["sunrise"]))}</h6>
              <h6>غروب {timeObjectToString(convertUnixTime(data["sys"]["sunset"]))}</h6>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <div className="d-flex">
              <i className="bi bi-droplet-fill me-2 text-dark"></i>
              <p>رطوبت %{data["main"]["humidity"]}</p>
            </div>
            <div className="d-flex">
              <i className="bi bi-wind me-2 text-dark"></i>
              <p>سرعت باد {Math.floor(convertMSToKH(data["wind"]["speed"]))} کیلومتر</p>
            </div>
          </div>
        </div>
      }
      {isLoading &&
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-border text-dark rounded-circle" role="status" style={{width: '50px', height: '50px', marginRight: '39px'}}></div>
        </div>
      }
      {isError && error.status === 404 &&
        <h3 className="m-0 ms-3 mt-2 error-title">
          شهر یافت نشد!
        </h3>
      }
      {isError && error.error ==='TypeError: Failed to fetch' &&
        <>
          <h3 className="m-0 ms-3 mt-2 error-title">
            خطا در اتصال به سرور!
          </h3>
          <p className="m-2">
            از اتصال دستگاه خود به اینترنت، اطمینان حاصل پیدا کنید.
          </p>
        </>
      }
    </section>
  );
}
 
export default Weather;

// Utilities
function convertMSToKH(number) {
  return number * 3.6;
}

function changeDigit(number) {
  const strNum = typeof number === "string" ? number : String(number);
  return strNum.length > 1 ? strNum : "0" + strNum;
}

function convertUnixTime(unixTime) {
  const date = new Date(unixTime * 1000);
  const hours = changeDigit(date.getHours());
  const minutes = changeDigit(date.getMinutes());
  const seconds = changeDigit(date.getSeconds());

  return {
    hours,
    minutes,
    seconds,
  };
}

// Convertin a time object to string time
function timeObjectToString(obj) {
  return `${obj["hours"]}:${obj["minutes"]}`;
}