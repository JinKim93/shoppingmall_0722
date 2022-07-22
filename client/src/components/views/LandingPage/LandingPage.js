import React, { useCallback, useEffect, useState } from 'react'
import { Icon, Carousel } from 'antd';
import 'pure-react-carousel/dist/react-carousel.es.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styled from 'styled-components';
import useHover from '../../../hooks/useHover';
import './Sections/LandingPage.css';
import { Link, useHistory } from 'react-router-dom';
import {Button} from "semantic-ui-react";

function LandingPage() {

    {/* slider-bar - Carousel에 사용 - HEEJEONG*/ }
    const contentStyle = { 
        height: '320px',
        width: '100%'
      };

    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true, // 선택하면 해당 아이템이 가운데로
        
        responseive: [ //반응형 구현 옵션
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }            
        ]
    };

    const sliderStyle = {
        width:"85%", 
        height:"500px", 
        //borderRadius:"20px", 
        //boxShadow:"20px 20px 15px 2px rgb(199, 198, 198)",
        margin: "0 auto" // 슬라이더 내부 요소들 가운데 배치
    };
    const hoveredSliderStyle = {
        width:"85%", 
        height:"500px", 
        //borderRadius:"20px", 
        //boxShadow:"20px 20px 15px 2px rgb(199, 198, 198)",
        margin: "0 auto", // 슬라이더 내부 요소들 가운데 배치
        opacity: "0.5"
    }

    const Wrap = styled.div`
        margin: 0 auto;
        margin-bottom: 10%;
        width: 85%;
        
        .slick-slide {
            margin: 1% auto;
        }
        .slick-list {
            margin: 0 5px;
        }
        
        .slick-prev:before {
            font-size: 30px;
            opacity: 0.3;
            color: grey;
            left: 0;
        }
        .slick-next:before {
            font-size: 30px;
            opacity: 0.3;
            color: grey;
        }
    `;

    const [btnHide, setBtnHide] = useState(true);
    const [ref, hover] = useHover();
 
    const [imgHovered, setImgHovered] = useState(false);
    const [imgHovered2, setImgHovered2] = useState(false);
    const [imgHovered3, setImgHovered3] = useState(false);
    const [imgHovered4, setImgHovered4] = useState(false);
    const [imgHovered5, setImgHovered5] = useState(false);
    const [imgHovered6, setImgHovered6] = useState(false);

    useEffect(() => {
        // setImgHovered 한번만 일어나도록
        
    }, [])

    const isHovering = () => {
        console.log('hover 성공')
    }

    const handleClick = () => {
        console.log('click 확인');
    }

    // <div 
    // style={{width:'60px', height:'60px', backgroundColor: 'Gold', borderRadius:'50%', display:'grid', placeContent:'center'}}>
    //     <img style={{width:'40px', height:'40px'}} src='images/lego-login.png' />
    // </div>
    // <img style={{height: '70px'}} src='images/lego-font.png' />

    const [active, setActive] = useState(false); /* 하트 좋아요에 이용 */
    const handleChangeActive = () => {
        setActive((previousHeart) => {
            return !previousHeart;
        });
    };

    /* 페이지 이동에 사용 <Link>대신 */
    const history = useHistory();
    const onClickLink = () => {
        history.replace('/2');
        // window.location.href="/deliverypolicy";
    }


    return (
        <div style={{ width: '100%', margin: '0 auto', paddingTop:'8em' }} >
            <div style={{ textAlign: 'center' }} >
                <h1 style={{fontSize: '48px', fontWeight:'bold'}}>스토어.좋아하는 LEGO 제품을 <br/>
                구입하는 가장 좋은 방법.</h1>

                <h3 onClick={onClickLink}>link : 제품목록페이지로 이동</h3>
                <h3>페이지 link : productlist로 이동</h3>

            </div>

            {/*Slider-bar-Carousel  - HEEJEONG*/}
            {/*슬라이더 1번 버튼 감싸주기 <Link to="/DetailProductPage_copy"> </Link> */}
            <Wrap >
            <Slider {...settings} >
                <div className='slider_item' onMouseEnter={() => setImgHovered(true)} onMouseLeave={() => setImgHovered(false)} >
                    <h3 style={{ textAlign: 'center' }}>1</h3>
                    {imgHovered ? 
                    <div ><img 
                    style={hoveredSliderStyle} 
                    src='images/legoImg5.jpg' /><Button className='slider_btn' onClick={onClickLink}>View More</Button></div> : 
                    <div><img 
                    style={sliderStyle} 
                    src='images/legoImg2.jpg' /></div> }
                </div>
                <div className='slider_item' onMouseEnter={() => setImgHovered2(true)} onMouseLeave={() => setImgHovered2(false)} >
                    <h3 style={{ textAlign: 'center' }}>2</h3>
                    {imgHovered2 ?
                    <div ><img 
                    style={hoveredSliderStyle} 
                    src='images/legoImg5.jpg' /><Link to="/PaymentPage"><Button className='slider_btn' >View More</Button></Link></div> : 
                    <img 
                    style={sliderStyle}
                    src='images/legoImg2.jpg' />
                    }
                </div>
                <div className='slider_item' onMouseEnter={() => setImgHovered3(true)} onMouseLeave={() => setImgHovered3(false)}>
                    <h3 style={{ textAlign: 'center' }}>3</h3>
                    {imgHovered3 ? 
                    <div ><img 
                    style={hoveredSliderStyle} 
                    src='images/legoImg5.jpg' /><button className='slider_btn' >View More</button></div>: 
                    <img 
                    style={sliderStyle} 
                    src='images/legoImg2.jpg' /> }

                </div>
                <div className='slider_item' onMouseEnter={() => setImgHovered4(true)} onMouseLeave={() => setImgHovered4(false)}>
                    <h3 style={{ textAlign: 'center' }}>4</h3>
                    {imgHovered4 ? 
                    <div ><img 
                    style={hoveredSliderStyle} 
                    src='images/legoImg5.jpg' /><button className='slider_btn' >View More</button></div>: 
                    <img 
                    style={sliderStyle} 
                    src='images/legoImg2.jpg' /> }
                    
                </div>
                <div className='slider_item' onMouseEnter={() => setImgHovered5(true)} onMouseLeave={() => setImgHovered5(false)}>
                    <h3 style={{ textAlign: 'center' }}>5</h3>
                    {imgHovered5 ? <div ><img 
                    style={hoveredSliderStyle} 
                    src='images/legoImg5.jpg' /><button className='slider_btn' >View More</button></div>: 
                    <img 
                    style={sliderStyle} 
                    src='images/legoImg2.jpg' /> }

                </div>
                <div className='slider_item'onMouseEnter={() => setImgHovered6(true)} onMouseLeave={() => setImgHovered6(false)} >
                    <h3 style={{ textAlign: 'center' }}>6</h3>
                    {imgHovered6 ? <div ><img 
                    style={hoveredSliderStyle} 
                    src='images/legoImg5.jpg' /><Link to='/ProductListPage'><button className='slider_btn' >View More</button></Link></div>: 
                    <img 
                    style={sliderStyle} 
                    src='images/legoImg2.jpg' /> }

                </div>
            </Slider>
            </Wrap>
            

            <Carousel autoplay >
                <div >
                    <h3 style={{textAlign:'center'}}>1
                    <img style={contentStyle} src='images/Lego-banner2.JPG' />
                    </h3>
                </div>
                <div >
                    <h3 style={{textAlign:'center'}}>2
                    <img style={contentStyle} src='images/Lego-banner3.JPG' /></h3>
                </div>
                <div >
                    <h3 style={{textAlign:'center'}}>3
                    <img style={contentStyle} src='images/Lego-banner1.JPG' /></h3>
                </div>
                
            </Carousel>

            \

        </div>
    )
}

export default LandingPage;
