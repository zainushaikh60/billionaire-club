import Button from "../ui/Button";

const NavbarMenu = (props) => {
  return (
    <div
      className="h-full bg-black text-white p-10 flex flex-col"
      onClick={() => props.setOpen(false)}
    >
      <div className="cursor-pointer">
        <img
          src="assets/navbar/close.png"
          className="w-8 ml-auto"
          alt="close"
        />
      </div>
      <ul className="flex flex-col items-center text-white my-auto text-4xl md1:text-xl space-y-10">
        <li>Home</li>
        <li>Features</li>
        <li>Roadmap</li>
        <li>Team</li>
        <li>
          <Button
            height="h-20 md1:h-14"
            padding="px-18"
            title="Join Our Discord"
          />
        </li>
      </ul>
    </div>
  );
};

export default NavbarMenu;
