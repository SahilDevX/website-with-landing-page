import React from 'react'
import aimg from './img/about_ii.jpg'

export default function AboutBanner() {
  return (
    <>
    <section className="about_section  ">
      <div className="col-md-12 ">
        <div className="img-box p-tt blll">
          <img src={aimg} alt=""/>
        </div>
      </div>
      <div className="col-md-12 ">
        <div className="detail-box cn blll bgo p-4 ">
          <div className="heading_container pdt20" >
            <h1 className="fm p40 p25 bc text-center">WHO WE ARE?</h1>
          </div>
          <h5 className="text-dark jf fs22 fm">
            Talescope, an innovative platform, connects top talent with organizations for seamless workforce solutions. Our customized approach meets unique needs, freeing resources for core goals. By managing talent challenges, we enable focus on strategic initiatives and innovation. We streamline talent acquisition, delivering professionals exceeding expectations. With our commitment to excellence, Talescope empowers high-performing teams, driving success and productivity. We're dedicated to fostering sustainable, mutually beneficial talent-organization relationships.
          </h5>
        </div>
      </div>
    </section>
    <section className="about_section layout_padding-top pdt0 layout_padding-bottom bll">
      <div className="containerrrr  ">
        <div className="row  ">
          <div className="col-md-7 bgo ht500">
            <div className="detail-box cn layout_padding_ ">
              <div className="heading_container pdt20" >
                <h1 className="fm p40 p25 bc text-center pt-4">WHO WE ARE?</h1>
              </div>
              <h5 className="text-dark jf fs22 fm">
                Talescope, an innovative platform, connects top talent with organizations for seamless workforce solutions. Our customized approach meets unique needs, freeing resources for core goals. By managing talent challenges, we enable focus on strategic initiatives and innovation. We streamline talent acquisition, delivering professionals exceeding expectations. With our commitment to excellence, Talescope empowers high-performing teams, driving success and productivity. We're dedicated to fostering sustainable, mutually beneficial talent-organization relationships.
              </h5>
            </div>
          </div>
          <div className="col-md-5 layout_padding_0 ">
            <div className="img-box animated slideInRight">
              <img src={aimg} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
