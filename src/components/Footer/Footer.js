import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div>Developed by Elizabeth Tice</div>
      <div>{currentYear}</div>
    </footer>
  );
};

export default Footer;
