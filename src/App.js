import React from 'react';
import './App.css';
import Head from './components/Head';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Heating from './components/pages/Heating';
import AirConditioning from './components/pages/AirConditioning';
import WaterHeater from './components/pages/WaterHeater';
import MapArea from './components/MapArea';
import Cards from './components/Cards';
import Footer from './components/Footer';
import TOS from './components/pages/TOS';
import Privacy from './components/pages/Privacy';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

var company_name_value = "HVAC Dallas"
var icon_href_value = "/heating.png"
var content_value = "HVAC services. Heating. Air conditioning. Cooling. Dallas."
var phone_value = "214-845-5328"
var city_value = "Dallas"
var state_long_value = "Texas"
var state_short_value = "TX"
var zip_value = "75201"
var url_value = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429176.33077900583!2d-97.01174930575758!3d32.82035247875392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1622593535418!5m2!1sen!2sus"

const App = () => {
  return (
    <>
      <Router>
        <Head
          company_name={company_name_value}
          icon_href={icon_href_value}
          content={content_value} />
        <Navbar
          company_name={company_name_value}
          phone={phone_value} />

        <Switch>
          <Route exact path="/">
            <Home
              company_name={company_name_value}
              city={city_value}
              state_long={state_long_value}
              zip={zip_value}
              phone={phone_value} />
          </Route>
          <Route path="/home">
            <Home
              company_name={company_name_value}
              city={city_value}
              state_long={state_long_value}
              zip={zip_value}
              phone={phone_value} />
          </Route>
          <Route path="/about">
            <About
              company_name={company_name_value}
              city={city_value}
              state_long={state_long_value}
              zip={zip_value}
              phone={phone_value} />
          </Route>
          <Route path="/services">
            <Services
              company_name={company_name_value}
              phone={phone_value} />
          </Route>          
          <Route path="/heating">
            <Heating
              city={city_value}
              state_short={state_short_value} />
          </Route>
          <Route path="/airconditioning">
            <AirConditioning
              city={city_value}
              state_short={state_short_value} />
          </Route>
          <Route path="/waterheater">
            <WaterHeater
              city={city_value}
              state_short={state_short_value} />
          </Route>
          <Route path="/tos">
            <TOS />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
        </Switch>

        <Cards />
        <MapArea
          url={url_value} />
        <Footer
          company_name={company_name_value} />
      </Router>
    </>
  );
}

export default App;