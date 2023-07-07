import Link from '@/atoms/Link/Link';

const Menu = (): JSX.Element => (
    <ul>
        <li>
            <Link href='http://localhost:6006/home'>Booking</Link>
        </li>
        <li>
            <Link href='http://localhost:6006/'>Schools & Camps</Link>
        </li>
        <li>
            <Link href='http://localhost:6006/'>Covid-19 Guidelines</Link>
        </li>
    </ul>
);

export default Menu;
