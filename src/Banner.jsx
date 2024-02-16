import React from 'react'

function Banner() {
  return(
<div>
  <div className='row'>
    <div className='col-lg-6 order-lg-2'>
      <div className='img1'></div>
    </div>
    <div className='col-lg-6 ' id='ban-1'>
    <h3 className='ban-head'>Fully Responsive Design</h3>
    <p className='ban-text'>When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
    </div>
  </div> 
  <div className='row'>
    <div className='col-lg-6'>
      <div className='img2'></div>
    </div>
    <div className='col-lg-6' id='ban-2'>
    <h3 className='ban-head'>Updated For Bootstrap 5</h3>
    <p className='ban-text'>Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
    </div>
  </div> 
  <div className='row'>
    <div className='col-lg-6 order-lg-2'>
      <div className='img3'></div>
    </div>
    <div className='col-lg-6' id='ban-3'>
    <h3 className='ban-head'>Easy to Use & Customize</h3>
    <p className='ban-text'>Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
    </div>
  </div> 
</div>
)
}
export default Banner