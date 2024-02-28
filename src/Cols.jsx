import React from 'react'


function Cols() {
  
  return(
    <div className='row' id='row'>
      <div className='col-lg-4'>
        <div className='icon'><i class="fa-brands fa-windows"></i></div>
        <h3>Fully Responsive</h3>
        <p className='para'>This theme will look great on <br></br>any device ,no matter the size!</p>
      </div>
      <div className='col-lg-4'>
      <div className='icon'><i class="fa-solid fa-layer-group"></i></div>
      <h3>Bootstrap 5 Ready</h3>
        <p className='para'>Featuring the latest build of the new <br></br>Bootstrap 5 framework!</p>
      </div>
      <div className='col-lg-4'>
      <div className='icon'><i class="fa-solid fa-terminal"></i></div>
      <h3>Easy to Use</h3>
        <p className='para'>Ready to use with your own content, <br></br>or customize the source files!</p>
      </div>
    </div>
);

}

export default Cols;