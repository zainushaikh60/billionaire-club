import Button from "../ui/Button";

const Navbar = (props) => {
  return (
    <div className="bg-black h-32 flex items-center justify-between py-4 px-10 md1:px-3 text-sm">
      <div className="w-52 h-full">
        <img
          src="/assets/navbar/logo.svg"
          className="h-full"
          alt="Billionaire Club"
        />
      </div>

      <div className="cursor-pointer hidden md5:block">
        <img
          src="/assets/navbar/menu.png"
          className="w-10"
          alt="menu"
          onClick={() => props.setOpen((prev) => !prev)}
        />
      </div>

      <ul className="flex items-center text-white space-x-10 md5:hidden">
        <li>Home</li>
        <li>Features</li>
        <li>Roadmap</li>
        <li>Team</li>
        <li>
          <Button height="h-11" title="Join Our Discord" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
