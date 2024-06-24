import { Swiper, SwiperSlide } from 'swiper/react';
import './slider.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Card from '../components/TestimonyCard';
import partner1 from '../assets/partnerWhite1.svg';
import user1 from '../assets/user1.png';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const data = [
  {
    text: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
    logo: partner1,
    user: {
      avatar: user1,
      name: 'Joh Miler',
      role: 'CEO',
    },
  },
  {
    text: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
    logo: partner1,
    user: {
      avatar: user1,
      name: 'Joh Miler',
      role: 'CEO',
    },
  },
  {
    text: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
    logo: partner1,
    user: {
      avatar: user1,
      name: 'Joh Miler',
      role: 'CEO',
    },
  },
  {
    text: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
    logo: partner1,
    user: {
      avatar: user1,
      name: 'Joh Miler',
      role: 'CEO',
    },
  },
  {
    text: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
    logo: partner1,
    user: {
      avatar: user1,
      name: 'Joh Miler',
      role: 'CEO',
    },
  },
];

function Slider() {
  return (
    <div className="container w-[100%] overflow-auto relative">
        <div className='m-auto text-center'>
            <h1 className='text-primary font-extrabold text-[56px]'>Our Partners. Our Friends.</h1>
            <h2 className='font-extrabold text-[#6464C8] text-[56px]'>They love us.</h2>
            <p className='text-lg'>Sem malesuada sed lectus id nunc mattis est eget tincidunt.</p>
        </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className='w-[360px] p-6 mt-6 mb-20'>
            <Card text={item.text} logo={item.logo} user={item.user} />
          </SwiperSlide>
        ))}

        <div className="slider-controler ">
          <div className="swiper-button-prev slider-arrow">
            <ArrowLeft />
          </div>
          <div className="swiper-button-next slider-arrow">
            <ArrowRight />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;
