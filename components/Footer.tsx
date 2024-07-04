import CustomLink from "./ui/CustomLink";
import { about } from "@/portfolio";

const Footer = () => (
 <footer className="mt-20">
  <CustomLink className="font-bold" href={about.social.github}>
   Created By Simon
  </CustomLink>
 </footer>
);

export default Footer;
