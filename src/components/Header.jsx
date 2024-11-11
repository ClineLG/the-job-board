import Title from "./Title";

const Header = () => {
  return (
    <header>
      <div className="container">{<Title name="The Job Board" />}</div>
    </header>
  );
};

export default Header;
