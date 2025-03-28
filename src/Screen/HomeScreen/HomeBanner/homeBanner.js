import React from 'react';
import './homeBanner.css';
import homeBannerItemProduct from '../../../homeProduct.json';

const HomeBanner = () => {
    return (
        <div className="homeBanner">
            <img className='homeBannerimg' src='https://m.media-amazon.com/images/I/61Dr+oVuClL._SX3000_.jpg' alt="Banner" />
            <div className="grayBackgroundHomeBanner"></div>

            <div className="homeBannerItemDiv">
                {homeBannerItemProduct.product.map((item, ind) => {
                    return (
                        <div key={ind} className="homeBannerItemDivCard"> 
                            <div className="homeBannerItemDivCardTitle">{item.itemTitle}</div>
                            <div className="imgHomeBannerItemDivCard">
                                {item.imgs.map((it, imgIndex) => {
                                    return (
                                        <div key={imgIndex} className="imgBannerHomeDiv">  
                                            <img className='imgBannerHomeDivImg' src={it} alt="Product" />
                                            <div className="imgBannerImgName">boAt Stone 1800 Bluet</div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="seeMoreHomeBanner">See More</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HomeBanner;
