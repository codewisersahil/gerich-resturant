import React from 'react';

import { SubHeading } from '../../Components';
import { images } from '../../Constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Food nourishes us, delights us, and generally fuels our daily lives.</p>
        </div>
        <p className="p__opensans"> In the era of social media, a gorgeously plated dish also makes for great content. However, coming up with something fun and exciting to say about that stunning 100 percent organic beet salad you just photographed for Instagram isn’t always easy.  </p>
      </div>

      <div className="app__chef-sign">
        <p>Sahil Patle</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.signature} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
