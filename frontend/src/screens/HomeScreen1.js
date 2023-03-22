import { React, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import weather from '../components/weather';
import axios from 'axios';

const HomeScreen1 = () => {
  const [userInfo, setuserInfo] = useState({
    file: [],
    filepreview: null,
  });

  const handleInputChange = (event) => {
    setuserInfo({
      ...userInfo,
      file: event.target.files[0],
      filepreview: URL.createObjectURL(event.target.files[0]),
    });
  };

  const [isSucces, setSuccess] = useState(null);

  const submit = async () => {
    const formdata = new FormData();
    formdata.append('avatar', userInfo.file);

    axios
      .post('http://localhost:8080/imageupload', formdata, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => {
        // then print response status
        console.warn(res);
        if (res.data.success === 1) {
          setSuccess('Image upload successfully');
        }
      });
  };

  return (
    <div>
      <Navbar bg="light" variant="light" sticky="top">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto ">
            <Nav.Link href="#disease">DISEASE</Nav.Link>
            <Nav.Link href="#crop">CROP</Nav.Link>
            <Nav.Link href="#Weather">WEATHER</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="square border ">
        <div className="container mr-60 " id="disease">
          <h3 className="text-dark text-bold m-3">
            Find out which disease has been caught by your plant{' '}
            {/* <span> codeat21.com </span>{' '} */}
          </h3>

          <div className="formdesign">
            {isSucces !== null ? <h4> {isSucces} </h4> : null}
            <div className="form-row">
              <label className="text-dark m-3">Upload Image :</label>
              <input
                type="file"
                className="form-control"
                name="upload_file"
                onChange={handleInputChange}
              />
            </div>

            <div className="form-row m-3">
              <button
                type="submit"
                className="btn btn-dark"
                onClick={() => submit()}
              >
                {' '}
                Predict{' '}
              </button>
            </div>
          </div>

          {userInfo.filepreview !== null ? (
            <img
              className="previewimg"
              src={userInfo.filepreview}
              alt="UploadImage"
            />
          ) : null}
        </div>
      </div>
      {/* <weather /> */}

      {/* <div className="crop" id="Crop">
      C   <h1>Crop content component<h6>Fertilizer Calculation</h6> <h6>Add crop image</h6></h1>

       C Add crop image part 
        <div
          className="card mx-auto  p-2 mb-4"
          style={{ width: '35rem', height: '38rem', border: '2px solid green' }}
        >
          <img
            src="../images/cropheal.jpg"
            className="card-img-top mx-auto"
            style={{
              width: '32rem',
              height: '23rem',
              border: '2px solid greenyellow',
            }}
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title m-3 ">Heal your crop</h5>
            <p className="card-text m-3 ">
              Take/upload a picture - see a dignosis - Get a medicine
            </p>
          C   <a href="#" className="btn btn-primary">Take or upload a picture</a>
            <div class="input-group m-3 p-2 mb-3 mx-auto">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="inputGroupFileAddon03"
              >
                Open Camera
              </button>
              <input
                type="file"
                className="form-control"
                id="inputGroupFile03"
                aria-describedby="inputGroupFileAddon03"
                aria-label="Upload"
              />
              <input
                className=" submit btn btn-primary "
                style={{ margin: ' 1rem 25rem 0rem 0rem' }}
                type="submit"
                value="Submit"
              />
             C <input className=" reset btn btn-primary " style={{margin : " -2rem 0rem 0rem 10rem" }} type="reset" value="Reset" />
            </div>
          </div>
        </div>
      </div>   */}
      {/* <hr></hr> */}
      {/* Crop Recommandation Part  */}
      <div className="square border mt-5 ">
        <div className="m-5" id="crop">
          <h2 style={{ textalign: 'center', margin: '0px', color: 'black' }}>
            <b>Find out the most suitable crop to grow in your farm</b>
          </h2>
          <br />

          <form method="POST" action="{{ url_for('crop_prediction') }}">
            <div class="form-group">
              <label for="Nitrogen" style={{ fontsize: '17px' }}>
                <b>Nitrogen</b>
              </label>
              <input
                type="number"
                class="form-control"
                id="Nitrogen"
                name="nitrogen"
                placeholder="Enter the value (example:50)"
                style={{ fontweight: 'bold' }}
                required
              />
            </div>
            <div class="form-group">
              <label for="Phosphorous" style={{ fontsize: '17px' }}>
                <b>Phosphorous</b>
              </label>
              <input
                type="number"
                class="form-control"
                id="Phosphorous"
                name="phosphorous"
                placeholder="Enter the value (example:50)"
                style={{ fontweight: 'bold' }}
                required
              />
            </div>

            <div class="form-group">
              <label for="Pottasium" style={{ fontsize: '17px' }}>
                <b>Pottasium</b>
              </label>
              <input
                type="number"
                class="form-control"
                id="Pottasium"
                name="pottasium"
                placeholder="Enter the value (example:50)"
                style={{ fontweight: 'bold' }}
                required
              />
            </div>
            <div class="form-group">
              <label for="ph" style={{ fontsize: '17px' }}>
                <b>ph level</b>
              </label>
              <input
                type="number"
                step="0.01"
                class="form-control"
                id="ph"
                name="ph"
                placeholder="Enter the value"
                style={{ fontweight: 'bold' }}
                required
              />
            </div>
            <div class="form-group">
              <label for="Rainfall" style={{ fontsize: '17px' }}>
                <b>Rainfall (in mm)</b>
              </label>
              <input
                type="number"
                step="0.01"
                class="form-control"
                id="Rainfall"
                name="rainfall"
                placeholder="Enter the value"
                style={{ fontweight: 'bold' }}
                required
              />
            </div>
            <div class="form-group">
              <label for="State" style={{ fontsize: '17px' }}>
                <b>State</b>
              </label>
              <select
                onchange="print_city('state', this.selectedIndex);"
                id="sts"
                name="stt"
                class="form-control"
                style={{ fontweight: 'bold', color: 'black' }}
                required
              ></select>
              <br />
              <label for="City" style={{ font: '17px' }}>
                <b>City</b>
              </label>
              <select
                id="state"
                class="form-control"
                name="city"
                // style={{ fontweight: 'bold', color: 'black' }}
                required
              ></select>
              {/* <script language="javascript">print_state("sts");</script> */}
            </div>

            <div class="m-3">
              <button
                type="submit"
                class="btn btn-info"
                style={{
                  color: 'black',
                  fontweight: 'bold',
                  width: '100px',
                  height: '30px',
                  borderRadius: '12px',
                  fontsize: '21px',
                }}
              >
                Predict
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Weather Part  */}
      <div className="mt-7 m-5" class="wrapper" id="Weather">
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
      {/* <script src="index.js"></script> */}
    </div>
  );
};

export default HomeScreen1;
