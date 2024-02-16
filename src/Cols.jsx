import React from 'react'


function Cols() {
  const name=[{
    head1:"Fully Responsive",
    text3:`This theme will look great on any device ,no matter the size!`
  },{
    head1:"Bootstrap 5 Ready",
    text3:"Featuring the latest build of the new Bootstrap 5 framework!"
  },{
    head1:"Easy to Use",
    text3:"Ready to use with your own content, or customize the source files!"
  }]
  return(
    
    <div className='row'>{
    name.map((e)=>{
    return(
    <div className='col-lg-4'>
      <h3 className='cols-head'>{e.head1}</h3>
      <p className='cols-text'>{e.text3}</p>
    </div>)
})}
    </div>
    
);

}

export default Cols;