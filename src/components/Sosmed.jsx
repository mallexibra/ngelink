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
      <a href='https://www.facebook.com/profile.php?id=100021062990029'>
        <IconBrandFacebook className={`${nameClass} mr-3`} />
      </a>
      <a href='https://www.instagram.com/mallexibra/'>
        <IconBrandInstagram className={`${nameClass} mr-3`} />
      </a>
      <a href='https://www.linkedin.com/in/mallexibra/'>
        <IconBrandLinkedin className={`${nameClass} mr-3`} />
      </a>
      <a href='https://github.com/mallexibra/'>
        <IconBrandGithub className={`${nameClass} mr-3`} />
      </a>
      <a href='https://mallexibra.github.io/mallexibra-website/'>
        <IconWebhook className={nameClass} />
      </a>
    </div>
  );
}

export default Sosmed;
