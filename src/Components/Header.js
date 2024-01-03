import React from 'react'

export default function Header(props) {
  return (
    <div>
    <header className="intro-header" style={{backgroundImage: 'url("img/'+props.img+'")',color:'black'}}>
    <div className="container">
        <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <div className="site-heading">
                    <h1>{props.title}</h1>
                    
                    <span className="subheading">A Clean Blog Theme by Start Bootstrap</span>
                </div>
            </div>
        </div>
    </div>
</header>
</div>

  )
}
