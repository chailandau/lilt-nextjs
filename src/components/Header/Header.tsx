import Logo from '@/assets/svg/Logo.svg';
import Flex from '@/atoms/Flex/Flex';
import Image from '@/atoms/Image/Image';

const Header = () => (
    <Flex as='header'>
        <Image src={Logo} alt='Long Island Laser Tag' priority />
    </Flex>
);

export default Header;
