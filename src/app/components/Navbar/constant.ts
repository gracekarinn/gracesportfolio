import { User, Code, Wrench, FolderOpen, Mail } from "lucide-react";

export const NAVBAR_LINKS = [
  {
    label: "Me",
    href: "/",
    icon: User,
  },
  {
    label: "Languages",
    href: "/languages",
    icon: Code,
  },
  {
    label: "Technologies",
    href: "/technologies",
    icon: Wrench,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: FolderOpen,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Mail,
  },
];
