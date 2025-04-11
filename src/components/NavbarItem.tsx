import { HTMLAttributes } from "react";
import { IconType } from "react-icons";
import { FC } from "react";

interface NavbarItemProps extends HTMLAttributes<HTMLAnchorElement> {
  iconLeft?: IconType;
  href: string;
  active: boolean;
}

const NavbarItem: FC<NavbarItemProps> = ({
  children,
  iconLeft: IconLeft,
  active,
  ...props
}) => {
  return (
    <a
      className={`flex transition-all text-lg gap-2 ${
        active ? "text-amber-400" : "text-gray-400"
      }`}
      {...props}
    >
      {IconLeft ? <IconLeft className="w-6 h-6 mt-0.5" /> : null}
      {children}
    </a>
  );
};

export default NavbarItem;
