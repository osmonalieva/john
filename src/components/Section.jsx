import React from 'react';
import pana from "../image/pana.png"
import beka from "../image/beka.png"
import fooone from "../image/fooone.png"
import foone2 from "../image/foone2.png"

import Footer from "../image/Footer.png"




const Section = () => {
    return (
        

        <section id='section'>
            <div className="container">
                <div className="section">
                    <div className="content">

                    <h2>Hi, I am John, <br />
Creative Technologist</h2>
<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br />  sint. Velit officia consequat duis enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.
</p>
<button>Download Resume</button>
                    </div>
<div className="image_logo">
    <img src={pana} alt="" />
</div>

                </div>
            </div>

            <div className="block">
                    <div className="contact">
                        <h3>Recent posts</h3>
                        <a href="#">View all</a>
                    </div>
                    <div className="box_loro">

                    <div className="card">
                        <div className="box_text">
                            <h4>Making a design system from <br /> scratch</h4>
                            <h6>12 Feb 2020 <span> |   Design, Pattern</span></h6>
                            <p>Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor do amet sint. Velit officia consequat <br /> duis enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.</p>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="box_text">
                            <h4>Making a design system from <br /> scratch</h4>
                            <h6>12 Feb 2020 <span> |   Design, Pattern</span></h6>
                            <p>Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor do amet sint. Velit officia consequat <br /> duis enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.</p>
                        </div>
                        
                    </div>
                    </div>

            </div>
            <div className="hero">
                    <h1>Featured works</h1>
                    <div className="worent">
                    <div className="hero_text">
                            <img src={beka} alt="" />
                         </div>
                        <div className="canva">
                            <h2>Designing Dashboards</h2>
                            <button>2024</button>
                            <input type="text" placeholder='Dashboard' />
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit <br />  officia consequat duis enim velit   mollit. Exercitation veniam consequat sunt <br /> nostrud amet.</p>
                            
                        </div>
                    </div>
                    <div className="worent">
                    <div className="hero_text">
                            <img src={fooone} alt="" />
                         </div>
                        <div className="canva">
                            <h2>Vibrant Portraits of 2020</h2>
                            <button>2026</button>
                            <input type="text" placeholder='Illustration' />
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit <br />  officia consequat duis enim velit   mollit. Exercitation veniam consequat sunt <br /> nostrud amet.</p>
                            
                        </div>
                    </div>
                    <div className="worent">
                    <div className="hero_text">
                            <img src={foone2} alt="" />
                         </div>
                        <div className="canva">
                            <h2>36 Days of Malayalam type</h2>
                            <button>2026</button>
                            <input type="text" placeholder='Typography' />
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit <br />  officia consequat duis enim velit   mollit. Exercitation veniam consequat sunt <br /> nostrud amet.</p>
                            
                        </div>
                    </div>
                    <img src={Footer} alt="" />
                </div>

            
        </section>

    );
};

export default Section;