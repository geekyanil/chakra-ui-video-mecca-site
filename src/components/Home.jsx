import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png'


const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: "translate(-50%,-50%)",
    textTransform: 'uppercase',
    p: '4',
    size: '4xl'
}
const Home = () => {

    return (
        <Box>
            <MyCarousel />
            <Container maxW={'container.xl'} minH={'100vh'} p="16" >
                <Heading textTransform={'uppercase'}
                    py="2"
                    w={'fit-content'}
                    borderBottom={'2px solid'}
                    m="auto"
                >
                    Services

                </Heading>
                <Stack
                    h={'full'}
                    p={'4'}
                    alignItems={'center'}
                    direction={['column', 'row']}
                >
                    <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
                    <Text letterSpacing={"widest"} lineHeight={'190%'} p={["4", "16"]} textAlign={'center'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos laudantium facilis cupiditate officia voluptates itaque est, quidem voluptatibus deserunt, fugit in similique asperiores et quasi voluptatem soluta officiis adipisci ea sequi, temporibus non earum aliquam corrupti. Autem rerum dolor deleniti culpa cum non molestiae alias necessitatibus quidem. Voluptatem mollitia fuga nisi optio beatae dolores quaerat dolore, tenetur sequi id iste sed aliquam et assumenda dolor quam, ab reiciendis totam ipsa alias! Sapiente, laborum veniam distinctio perspiciatis deserunt officia dignissimos hic tempora accusamus sed neque incidunt tempore inventore? Aliquam tempora dicta animi magni quis? Alias fugit quae ab ad iste neque minus nisi repellendus debitis magnam est impedit placeat voluptatem natus mollitia, culpa maiores tenetur suscipit quos modi reiciendis fuga. Nihil perferendis culpa voluptatem molestiae ratione voluptate perspiciatis harum quos, laboriosam voluptas itaque fuga cupiditate repudiandae soluta dolor, dolore sit animi. Voluptatem cum, earum perferendis molestiae provident dolore sapiente inventore delectus assumenda, tempora tempore! Tempore illum ut magni beatae esse voluptates deserunt corrupti reiciendis harum, rem, eius numquam doloremque, iste odio! Unde quo pariatur quibusdam, architecto nobis optio recusandae quis cum voluptas rerum assumenda, sed ratione consequatur dolorum ducimus iusto fuga quae. Sint a fugiat vitae totam quas pariatur ex?
                    </Text>

                </Stack>
            </Container>
        </Box>

    )
}

const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false} >
        <Box w="full" h={"100vh"}>
            <Image src={img1} />
            <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>
                Watch the Future
            </Heading>
        </Box>
        <Box w="full" h={"100vh"}>
            <Image src={img2} />
            <Heading bgColor={"whiteAlpha.600"} color={'black'} {...headingOptions}>
                Future is Gaming
            </Heading>
        </Box>
        <Box w="full" h={"100vh"}>
            <Image src={img3} />
            <Heading bgColor={"whiteAlpha.600"} color={'black'} {...headingOptions}>
                Gaming on Console
            </Heading>
        </Box>
        <Box w="full" h={"100vh"}>
            <Image src={img4} />
            <Heading bgColor={"whiteAlpha.600"} color={'black'} {...headingOptions}>
                Night life is cool
            </Heading>
        </Box>
    </Carousel>
)

export default Home