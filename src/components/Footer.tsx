const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4 text-center mt-auto">
      <div className="container mx-auto">
        <p>&copy; {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
