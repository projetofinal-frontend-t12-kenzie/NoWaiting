import "swiper/css";
import "swiper/css/pagination";
import "../../components/Landingpage/Landingpage.swiper.css"
import { LpagerContainer, Clickable, Container, DivFregues, DivRestaurante, DivSelection, DivTitle, DivWellcome, Down, Logo, SubTitle, Title, Restaurante, Cliente } from "../../components/Landingpage/Landingpage.style";
import down from "../../components/Landingpage/icons8-down-48.png"
import { motion } from 'framer-motion'

const Landingpage = ()=>{

    return(
        <LpagerContainer>
            <DivWellcome>
                <Container>
                    <DivTitle>
                    <motion.div 
                        animate={{
                        x: [150,0],
                        scale: [0.1, 1]}
                        } transition={{ duration: 2.5 }}>
                        <Title>BEM VINDO</Title>
                    </motion.div>
                    <motion.div 
                        animate={{
                        x: [150,0],
                        scale: [0.1, 1]}
                        } transition={{ duration: 2.5 }}>
                        <SubTitle>Porque seu pedido não pode esperar</SubTitle>
                    </motion.div>
                    </DivTitle>
                    <motion.div 
                        animate={{
                        x: [150,0],
                        scale: [0.1, 1]}
                        } transition={{ duration: 2.5 }}>
                    <Logo src="./assets/logo_whight.png" alt="logo"/>
                    </motion.div>
                </Container>
                <Clickable href="#down">
                <Down src={down} alt="down"/>
                </Clickable> 
            </DivWellcome>
            <DivSelection>
                <a href="/login">
                <DivRestaurante>
                    <Restaurante>
                        Restaurante
                    </Restaurante>
                </DivRestaurante>
                </a>
                <a href="/menu">
                <DivFregues>
                    <Cliente>
                        Cliente
                    </Cliente>
                </DivFregues>
                </a>
            </DivSelection>
            <div id="down"></div>
        </LpagerContainer>
    )
}

export default Landingpage
