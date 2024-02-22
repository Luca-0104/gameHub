import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.svg';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} boxSize="60px" margin="5px"/>
        <SearchInput/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar