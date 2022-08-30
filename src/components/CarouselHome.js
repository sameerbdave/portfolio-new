import React from "react";
import { Carousel } from 'react-carousel-minimal';

const CarouselHome = () => {
    const data = [
        {
            image: "hero-banner.jpg",
            caption: "San Francisco"
        },
        {
            image: "hero-banner-wealth.jpg",
            caption: "Scotland"
        },
        {
            image: "hero-banner.jpg",
            caption: "San Francisco"
        },
        {
            image: "hero-banner-wealth.jpg",
            caption: "Scotland"
        },
        {
            image: "hero-banner.jpg",
            caption: "San Francisco"
        },
        {
            image: "hero-banner-wealth.jpg",
            caption: "Scotland"
        },
        {
            image: "hero-banner.jpg",
            caption: "San Francisco"
        },
        {
            image: "hero-banner-wealth.jpg",
            caption: "Scotland"
        },
        {
            image: "hero-banner.jpg",
            caption: "San Francisco"
        },
        {
            image: "hero-banner-wealth.jpg",
            caption: "Scotland"
        },
        {
            image: "hero-banner.jpg",
            caption: "San Francisco"
        },
        {
            image: "hero-banner-wealth.jpg",
            caption: "Scotland"
        },
        {
            image: "hero-banner.jpg",
            caption: "San Francisco"
        },
        {
            image: "hero-banner-wealth.jpg",
            caption: "Scotland"
        },
        {
            image: "hero-banner.jpg",
            caption: "San Francisco"
        },
        {
            image: "hero-banner-wealth.jpg",
            caption: "Scotland"
        },
        {
            image: "hero-banner.jpg",
            caption: "San Francisco"
        },
        {
            image: "hero-banner-wealth.jpg",
            caption: "Scotland"
        },
        {
            image: "hero-banner.jpg",
            caption: "San Francisco"
        },
        {
            image: "hero-banner-wealth.jpg",
            caption: "Scotland"
        },
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }
    return (
        <div className="App">
            <div style={{ textAlign: "center" }}>
                <div>
                    <Carousel
                        data={data}
                        time={2000}
                        width="100%"
                        height="auto"
                        captionStyle={captionStyle}
                        radius="0"
                        slideNumber={true}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={true}
                        dots={false}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={true}
                        thumbnailWidth="200px"
                        style={{
                            textAlign: "center",
                            maxWidth: "100%",
                            maxHeight: "auto",
                        }}
                    />
                </div>
            </div>
        </div>
    );

}

export default CarouselHome;
