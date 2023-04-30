import React, { Component } from 'react'
import { Data_item_cart } from '../../component/constant'
import Video_Title from '../../component/video_Title'
import Slider from 'react-slick'

export default class AutoSlice_cart_newsPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 1000,
      cssEase: 'linear',
      responsive:[{
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      appendDots: () => (
        <div
          style={{
            backgroundColor: '#ddd',
            borderRadius: '10px',
            padding: '10px',
            display: 'none'
          }}
        ></div>
      )
    }
    return (
      <div className='pb-10 '>
        <Slider {...settings}>
          {Data_item_cart.map((item) => (
            <div className='gap-3 px-2'>
              <Video_Title
                Video_media_title={item.title}
                Video_media_video={item.video}
                Image_csb_All={item.image}
                hight_item={'h-[155px]'}
                line_clamp={'line-clamp-2'}
              />
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}
