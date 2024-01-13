import { Box, Heading, Image } from "@chakra-ui/react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOption = {
    pos :'absolute',
    top:'50%',
    left: '50%',
    transform:'translate(-50%,-50%)',
    p:'4',
    size:'4xl',

};

function Home() {
  return (
    <Box>
      <MyCarousel />
    </Box>
  );
}

const MyCarousel = () => {
  return (
    <Carousel
      infiniteLoop
      autoPlay
      interval={1000}
      showArrows={false}
      showThumbs={false}
      showStatus={false}
    >
      <Box w={"full"} h={"100vh"}>
        <Image src={img1} h="full" w={'full'} objectFit={'cover'}/>
        <Heading bg={"blackAlpha.600"} color={"white"} {...headingOption}>
          Watch The Future
        </Heading>
      </Box>
      <Box w={"full"} h={"100vh"}>
        <Image src={img2} h="full" w={'full'} objectFit={'cover'}/>
        <Heading bg={"blackAlpha.600"} color={"white"}{...headingOption}>
          Watch The Future
        </Heading>
      </Box>
      <Box w={"full"} h={"100vh"}>
        <Image src={img3} h="full" w={'full'} objectFit={'cover'}/>
        <Heading bg={"blackAlpha.600"} color={"white"}{...headingOption}>
          Future Is Gaming
        </Heading>
      </Box>
      <Box w={"full"} h={"100vh"}>
        <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
        <Heading bg={"blackAlpha.600"} color={"white"}{...headingOption}>
          Watch The Future
        </Heading>
      </Box>
      <Box w={"full"} h={"100vh"}>
        <Image src={img5} h="full" w={'full'} objectFit={'cover'} />
        <Heading bg={"blackAlpha.600"} color={"white"}{...headingOption}>
          Watch The Future
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;
