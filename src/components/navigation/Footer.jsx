const Footer = () => {
  return (
    <div className="flex items-center justify-between border-t p-10 text-gray-400 mt-auto md4:flex-col">
      <div className="flex md4:flex-col  items-center">
        <img
          src="/assets/navbar/logo.svg"
          alt="logo"
          className="mr-10 md4:mr-0"
        />
        <div className="flex md4:flex-col md4:my-4 items-center space-x-3 ">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <img src="/assets/social-media/twitter.svg" alt="twitter" />
        <img src="/assets/social-media/discord.svg" alt="twitter" />
        <img src="/assets/social-media/instagram.svg" alt="twitter" />
      </div>
    </div>
  );
};

export default Footer;
