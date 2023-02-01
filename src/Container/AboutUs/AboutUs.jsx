import React from 'react';

import { images } from '../../Constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.sahilogo} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">The Sahil's Kitchen was born out of love and respect for these humble deli creations, met with a desire to bring quality ingredients to the table. Simply put, we’re here to bring you a sandwich experience you can feel good about.In order to better serve our customers we opened our second location on March, 2023 in the city of Bangalore.</p>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Sahil's Restaurant began on April 26th, 2022 in the city of Bangalore Heights of “Quality, Healthy, and Tradition” the Sahil's Kitchen has three generations of family member working together to fulfill the idea “Honor the Customer, Quality Comes First”</p>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>
    </div>
  </div>
);

export default AboutUs;
