export function Store(){
    return(
            <div className="header_section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            </div>
                                <div className="col-sm-9">
                                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                         <span className="navbar-toggler-icon"></span>
                                        </button>
                                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav">
                                    <a className="nav-item nav-link" href="index.html">Home</a>
                                    <a className="nav-item nav-link" href="collection.html">Collection</a>
                                    <a className="nav-item nav-link" href="shoes.html">Shoes</a>
                                    <a className="nav-item nav-link" href="racing boots.html">Racing Boots</a>
                                    <a className="nav-item nav-link" href="contact.html">Contact</a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
    )
}