import React from "react";

export default function Home(props) {
  // const [name, setName] = useState("Fardin");
   //const [old, setold] = useState(0);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
          {props.children}
            {/* <button
              className="btn"
              type="button"
              onClick={() => {
                setName("sheikh furniture");
              }}
            >
              change {name}
            </button> */}
            {/* <div className="post-preview">
              <a href="post.html">
                <h2 className="post-title">
                  Man must explore, and this is exploration at its greatest
                </h2>
                <h3 className="post-subtitle">
                  Problems look mighty small from 150 miles up
                </h3>
              </a>
              <p className="post-meta">
                Posted by <a href="#">Start Bootstrap</a> on September 24, 2014
              </p>
            </div>
            <hr /> */}
            {/* {/* <div className="post-preview">
              <a href="post.html">
                <h2 className="post-title">
                  I believe every human has a finite number of heartbeats. I
                  don't intend to waste any of mine.
                </h2>
              </a>
              <p className="post-meta">
                Posted by <a href="#">Start Bootstrap</a> on September 18, 2014
              </p>
            </div>
            <hr />
            <div className="post-preview">
              <a href="post.html">
                <h2 className="post-title">
                  Science has not yet mastered prophecy
                </h2>
                <h3 className="post-subtitle">
                  We predict too much for the next year and yet far too little
                  for the next ten.
                </h3>
              </a>
              <p className="post-meta">
                Posted by <a href="#">Start Bootstrap</a> on August 24, 2014
              </p>
            </div>
            <hr />
            <div className="post-preview">
              <a href="post.html">
                <h2 className="post-title">Failure is not an option</h2>
                <h3 className="post-subtitle">
                  Many say exploration is part of our destiny, but it’s actually
                  our duty to future generations.
                </h3>
              </a>
              <p className="post-meta">
                Posted by <a href="#">Start Bootstrap</a> on July 8, 2014
              </p>
            </div>
            <hr />

            <ul className="pager">
              <li className="next">
                <a
                  onClick={() => {
                    setold(!old);
                  }}
                >
                  Older Posts&rarr;
                </a>
              </li>
            </ul>
          </div>
          {old ? (
            <>
              {" "}
              <div className="post-preview">
                <a href="post.html">
                  <h2 className="post-title">Failure is not an option</h2>
                  <h3 className="post-subtitle">
                    Many say exploration is part of our destiny, but it’s
                    actually our duty to future generations.
                  </h3>
                </a>
                <p className="post-meta">
                  Posted by <a href="#">Start Bootstrap</a> on July 8, 2014
                </p>
              </div>
              <hr />
            </>
          ) : (
            ""
          )} */}
        </div> 
      </div>

      <hr />
    </div>
    </div>
  );
}
