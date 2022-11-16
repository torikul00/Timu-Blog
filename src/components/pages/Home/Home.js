import React from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import './Home.css'
const Home = () => {
    return (
        <>
            <Navbar />
            <main>
                <header>
                    <div className='left-container'>
                        <img className='left-content-img' src="https://www.reuters.com/resizer/cEqS4_ALLe1roZ8LCNegzXQ5N5c=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BCJU2U2UB5OXPGG7NKHLOWOSIA.jpg" alt="" />
                        <div className="left-content">
                            <button className='pin-button'>I phone</button>
                            <h3>
                                APPLE
                                11 of Best Laptops Evaluated Based on Budget</h3>
                            <p className='published'>by jhon , agust 12 , 2022</p>
                        </div>

                    </div>
                    <div className='right-container'>
                        <div className='top-container'>
                            <img className='left-content-img' src="https://www.reuters.com/resizer/H3uJzcjEd_DKwsNjDfzMgGy-VI8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UCFP3D2CJNJBPEKGJEY4NT6KLU.jpg" alt="" />
                            <div className="right-top-content">
                                <button className='pin-button'>Laptop</button>
                                <h3>
                                    Apple Watch Series 5 is the Best One Yet By Consumer
                                </h3>
                                <p className='published'>agust 12 , 2022</p>
                            </div>

                        </div>
                        <div className="bottom-container">
                            <div className='bottom-left'>
                                <img className='left-content-img' src="https://www.reuters.com/resizer/byv4i6yA0X7rarOa70KfcbwjlFU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/YVG2SC4SJVJONO56AIGNAGAB5Y.jpg" alt="" />
                                <div className="right-top-content">
                                    <button className='pin-button'>Laptop</button>
                                    <h3>
                                        Here’s What People Think of iOS 13 New Dark Mode
                                    </h3>
                                    <p className='published'>agust 12 , 2022</p>
                                </div>
                            </div>
                            <div className='bottom-right'>
                                <img className='left-content-img' src="https://i.guim.co.uk/img/media/8f4113299e3b2860ab1f06bd3be2402d54399197/0_293_4482_2689/master/4482.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=edee0dae65afc319995e5e5e7c95996d" alt="" />
                                <div className="right-top-content">
                                    <button className='pin-button'>Laptop</button>
                                    <h3>
                                        18 Practices for Building Responsive Web Applications
                                    </h3>
                                    <p className='published'>agust 12 , 2022</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </header>



            </main>
        </>
    );
};

export default Home;