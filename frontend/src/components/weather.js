import React from 'react';

function weather() {
  return (
    <div>
      {/* Weather Report part  */}

      {/* <div className="card text-center m-4">
          <div className="card-header">Today's Weather</div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary"></a> comment it 
          </div>
          <div className="card-footer text-muted">
            Possible light rain overnight <br></br> rain 57% <br></br> time
          </div>
        </div> */}

      <div class="wrapper" id="Weather">
        <h1>Weather Information</h1>

        <div class="tab-container">
          <p class="tab" data-userWeather>
            Your Weather
          </p>
          <p class="tab" data-searchWeather>
            Search Weather
          </p>
        </div>

        <div class="weather-container">
          {/* <!-- grant location container--> */}
          <div class="sub-container grant-location-container">
            <img
              src="./images/location.png"
              alt=""
              width="80"
              height="80"
              loading="lazy"
            />
            <p>Grant Location Access</p>
            <p>Allow Access to get weather Information</p>
            <button class="btn" data-grantAccess>
              Grant Access
            </button>
          </div>

          {/* <!-- search form -> form-container--> */}
          <form class="form-container" data-searchForm>
            <input placeholder="Search for City..." data-searchInput />
            <button class="btn" type="submit">
              <img
                src="./images/search.png"
                alt=""
                width="20"
                height="20"
                loading="lazy"
              />
            </button>
          </form>

          {/* <!--- loading screen container --> */}
          <div class="sub-container loading-container">
            <img src="./assets/loading.gif" alt="" width="150" height="150" />
            <p>Loading</p>
          </div>

          {/* <!-- show weather info --> */}
          <div class="sub-container user-info-container">
            {/* <!--city name and Flag--> */}
            <div class="name">
              <p data-cityName></p>
              <img data-countryIcon alt="" />
            </div>

            {/* <!-- weather descriptuion--> */}
            <p data-weatherDesc></p>

            {/* <!--weather Icon--> */}
            <img data-weatherIcon alt="" />
            {/* <!--temperature--> */}
            <p data-temp></p>

            {/* <!--3 cards - parameters--> */}
            <div class="parameter-container">
              {/* <!--card 1--> */}
              <div class="parameter">
                <img src="./images/wind.png" alt="" />
                <p>windspeed</p>
                <p data-windspeed></p>
              </div>

              {/* <!--card 2--> */}
              <div class="parameter">
                <img src="./images/humidity.png" alt="" />
                <p>humidity</p>
                <p data-humidity></p>
              </div>

              {/* <!--card 3--> */}
              <div class="parameter">
                <img src="./images/cloud.png" alt="" />
                <p>Clouds</p>
                <p data-cloudiness></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default weather;
