type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <header data-testid="header" className="bg-gray-800 text-white py-4">
      <div className="p-4">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
