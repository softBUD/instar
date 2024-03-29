import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 576 },
    items: 6,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 5,
  },
};

export default function Scrollbar({ children }: { children: React.ReactNode }) {
  return (
    <Carousel
      containerClass='w-full flex gap-1'
      responsive={responsive}
    >
      {children}
    </Carousel>
  );
}
