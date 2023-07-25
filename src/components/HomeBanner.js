 
const HomeBanner = () => {
    return(
      <div className="home-banner">
        <div className="our-story">
          <h1 className="our-story-card-title" data-uia="hero-title">Unlimited movies, TV shows and more.</h1>
          <h2 className="our-story-card-subtitle" data-uia="our-story-card-subtitle">Watch anywhere. Cancel anytime.</h2>
          <p className="email-form-title">Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Email Address" />
            <button className="input-group-button btn-danger text-white">Get Started</button>
          </div>
        </div>
        <div className="shadow"></div>
        <img className="concord-img vlv-creative" src="https://th.bing.com/th/id/R.d2edb29f3f970c36aadecbb01ed0bb79?rik=z%2bAuuobpN0KNSg&riu=http%3a%2f%2fisquad.tv%2fwp-content%2fuploads%2f2018%2f08%2fNetflix-Background.jpg&ehk=Ij4PSd%2bZkTcESSlAVWoGpNmExM0fu3BgteNT6AnS9lM%3d&risl=&pid=ImgRaw&r=0"  alt=""></img>
      </div>
    )
  }
  
  export default HomeBanner;