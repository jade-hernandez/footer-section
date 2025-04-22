import { sectionsData } from "data/footer-data";
import FacebookIcon from "../icons/facebook-icon";
import YoutubeIcon from "../icons/youtube-icon";
import InstagramIcon from "../icons/instagram-icon";
import GithubIcon from "../icons/github-icon";
import XIcon from "../icons/x-icon";



const ICON_SIZE = 24;
const ICON_COLOR = "#A3A3A3";
const icons = [
  {
    id: "youtube",
    icon: <YoutubeIcon size={ICON_SIZE} color={ICON_COLOR} />,
    label: "Visit Youtube profile",
  },
  {
    id: "instagram",
    icon: <InstagramIcon size={ICON_SIZE} color={ICON_COLOR} />,
    label: "Visit Instagram profile",
  },
  {
    id: "facebook",
    icon: <FacebookIcon size={ICON_SIZE} color={ICON_COLOR} />,
    label: "Visit facebook profile",
  },
  {
    id: "github",
    icon: <GithubIcon size={ICON_SIZE} color={ICON_COLOR} />,
    label: "Visit github profile",
  },
  {
    id: "x",
    icon: <XIcon size={ICON_SIZE} color={ICON_COLOR} />,
    label: "Visit X profile",
  }
];

const IconButton: React.FC<{ children: React.ReactNode; label: string }> = ({
  children,
  label,
}) => {
  return (
    <button className="p-2" aria-label={label}>
      {children}
    </button>
  );
};



const Footer = () => {
  return (
    <footer className="flex flex-col items-center ">
      <div className="">
        {sectionsData.map(({ path, id, title }) => (
          <a
            key={id}
            href={path}
            className="text-neutral-600 text-sm p-1"
          >
            {title}
          </a>
        ))}
      </div>
      <div className="flex gap-4 justify-center">
        {icons.map((icon) => (
          <IconButton key={icon.id} label={icon.label}>
            {icon.icon}
          </IconButton>
        ))}
      </div>
    </footer >
  );
}
export default Footer;