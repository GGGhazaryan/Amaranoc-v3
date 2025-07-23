import Logo from './Logo';
import Navigation from './Navigation';
import HeaderRight from './HeaderRight';

export default function Header() {
  return (
    <header className="flex items-center justify-between text-2xl p-4">
      <Logo />
      <Navigation />
      <HeaderRight />
    </header>
  );
}
