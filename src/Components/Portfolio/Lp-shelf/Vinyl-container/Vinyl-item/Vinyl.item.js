import Github from "./links/github";
import Website from "./links/website";
import "./Vinyl.item.css";

const Vinyl = (props) => {
  return (
    <>
      <div
        id="lp"
        className="text-white text-sm font-bold flex flex-col -rotate-45 transition duration-500 ease-out transform hover:translate-x-16 hover:rotate-0"
      >
        <Website link="https://www.google.com" />
        <img src={props.src} alt={props.alt} />
        <Github link="https://www.github.com" />
      </div>
    </>
  );
};

export default Vinyl;