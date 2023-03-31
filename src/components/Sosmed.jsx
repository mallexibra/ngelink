import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconWebhook,
} from "@tabler/icons-react";
import "../index.css";

function Sosmed(props) {
  const nameClass = `scale-125 hover:scale-150 stroke-indigo-700 hover:stroke-indigo-500 cursor-pointer`;
  return (
    <div className={`sosmed flex items-center justify-center `}>
      <a href='#'>
        <IconBrandFacebook className={`${nameClass} mr-3`} />
      </a>
      <a href='#'>
        <IconBrandInstagram className={`${nameClass} mr-3`} />
      </a>
      <a href='#'>
        <IconBrandLinkedin className={`${nameClass} mr-3`} />
      </a>
      <a href='#'>
        <IconBrandGithub className={`${nameClass} mr-3`} />
      </a>
      <a href='#'>
        <IconWebhook className={nameClass} />
      </a>
    </div>
  );
}

export default Sosmed;
