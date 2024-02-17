import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
const NavBar = () => {
    return (
        <HStack padding='10px' paddingEnd='10px' justifyContent={'space-between'}>
            <Image src={logo} boxSize='80px' />;
            <ColorModeSwitch />
        </HStack>


    )
}

export default NavBar