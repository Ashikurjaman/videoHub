import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";

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
      <Container maxW={'container.xl'} minH={'100vh'} >
      <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'2px solid black'} margin={'auto'}>
        Services
      </Heading>
      <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column','row']}>
        <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'}/>
        <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rem esse temporibus in distinctio, quaerat incidunt quae, cumque, fugit neque eum laboriosam. Eum dolores quo perspiciatis quam dolorem odio. Ipsa dolores quibusdam, eius, autem rem culpa non impedit excepturi voluptatem nobis reiciendis voluptates voluptate iusto? Exercitationem ab minima tempore quis!
        </Text>
      </Stack>
      </Container>

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
          Gaming is Cooling Things in the World
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
          Night life is Cool
        </Heading>
      </Box>
      
    </Carousel>
  );
};

export default Home;
