import React, { Component } from 'react'
import { Img_all_array } from '../constant'
import Video_Title from '../video_Title'
import Slider from 'react-slick'
import classNames from 'classnames'
import Item_slide_img from '../Item_slide_img'

export default class Slice_cart_news_coppy_image extends Component {
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
      responsive: [
        {
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
      ]
    }
    return (
      <div className='pb-10 '>
        <Slider {...settings}>
          {Img_all_array.map((item) => (
            <div className='gap-3 px-2'>
              <Item_slide_img Name_img={item.name} Img_Items={item.img} />
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}
