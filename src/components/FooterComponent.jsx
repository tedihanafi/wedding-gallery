export const FooterComponent = () => {
    return (
      <footer className="footer py-4 px-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
              <a href="/" className="d-flex align-items-center">
                <img src="/img/logodiana.png" className="h-8 me-3" alt="FlowBite Logo" style={{ width:'70px' }} />
                <span className="text-black" style={{ fontSize:'20px' }}>Diana Irma Makeup</span>
              </a>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-4 mb-4 mb-md-0">
                  <h4 className="mb-4 text-uppercase text-black">Menu</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2"><a href="/" className="text-decoration-none text-white">Home</a></li>
                    <li className="mb-2"><a href="/profilsekolah" className="text-decoration-none text-white">Paketan</a></li>
                    <li className="mb-2"><a href="/visimisi" className="text-decoration-none text-white">Testimoni</a></li>
                    <li className="mb-2"><a href="/gallery" className="text-decoration-none text-white">Gallery</a></li>
                    <li className="mb-2"><a href="/kontak" className="text-decoration-none text-white">Kontak</a></li>
                  </ul>
                </div>
                <div className="col-md-4 mb-4 mb-md-0">
                  <h4 className="mb-4 text-uppercase text-black">Sosial</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2"><a href="#" className="text-decoration-none text-white">WhatApp</a></li>
                    <li><a href="#" className="text-decoration-none text-white">Instagram</a></li>
                    <li><a href="#" className="text-decoration-none text-white">Facebook</a></li>
                    <li><a href="#" className="text-decoration-none text-white">Youtube</a></li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h4 className="mb-4 text-uppercase text-black">Legal</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2"><a href="#" className="text-decoration-none text-white">MUA Hits</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4" />
  
              <p className="text-muted">By With Code@2024 <span>TediHanafi</span> All Rights Reserved.</p>
          
        </div>
        </footer>
    );
  }
  
  export default FooterComponent;
  