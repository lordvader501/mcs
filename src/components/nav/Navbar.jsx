import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Link,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useState } from "react";
import classNames from "classnames";
import logo from "../../assets/logo.png";
import { Down } from "../../icons/Down";

function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState();
  const menuItems = [
    {
      option: "Solutions",
      link: "#solutions",
      isDropDown: true,
    },
    {
      option: "Features",
      link: "#features",
      isDropDown: true,
    },
    {
      option: "Blogs",
      link: "#blog",
      isDropDown: false,
    },
    {
      option: "About",
      link: "#about",
      isDropDown: true,
    },
  ];
  return (
    <div className="bg-transparent fixed z-50">
      <Navbar
        maxWidth="2xl"
        className="py-2 flex justify-center fixed items-center bg-transparent"
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      >
        <NavbarContent className="" justify="start">
          <NavbarBrand className="max-w-[170px]">
            <Link href="/">
              <img src={logo} alt="logo" />
            </Link>
          </NavbarBrand>
          <NavbarContent className="hidden lg:flex">
            {menuItems?.map((item, i) => {
              return (
                <div key={i}>
                  {item.isDropDown ? (
                    <Dropdown>
                      <NavbarItem>
                        <DropdownTrigger>
                          <Button
                            disableRipple
                            className="flex p-3  items-center bg-transparent data-[hover=true]:bg-transparent"
                            endContent={<Down fill="#0076CE" size={16} />}
                            radius="sm"
                            variant="light"
                          >
                            <p className="font-poppins font-bold text-px18 text-black">
                              {item.option}
                            </p>
                          </Button>
                        </DropdownTrigger>
                      </NavbarItem>
                      <DropdownMenu
                        aria-label="ACME features"
                        className="w-[340px]"
                        itemClasses={{
                          base: "gap-4",
                        }}
                      >
                        <DropdownItem
                          key="autoscaling"
                          description="some description..."
                        >
                          some otpions...
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  ) : (
                    <NavbarItem key={i}>
                      <Link
                        className={classNames(
                          "p-3 font-poppins font-bold text-px18 text-black bg-transparent data-[hover=true]:bg-transparent",
                          {
                            "text-[#C491D7]": item.option === activeLink,
                            "text-black": item.option !== activeLink,
                          }
                        )}
                        href={item?.link}
                        onClick={() => setActiveLink(item?.option)}
                      >
                        <p className="font-poppins font-bold text-px18 text-black">
                          {item.option}
                        </p>
                      </Link>
                    </NavbarItem>
                  )}
                </div>
              );
            })}
          </NavbarContent>
        </NavbarContent>

        <NavbarContent className="list-none hidden lg:flex" justify="end">
          <NavbarItem>
            <Button
              radius="full"
              as={Link}
              href="#download"
              variant="flat"
              className="flex !w-[100px] rounded-xl text-center font-poppins font-bold sm:max-w-[220px] text-[#0076CE] bg-white border-2 border-solid border-[#0076CE]"
            >
              Login
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              radius="full"
              as={Link}
              href="#download"
              variant="flat"
              className="py-2.5 px-5 !w-[100px] rounded-xl text-center font-poppins font-bold sm:max-w-[220px] text-white bg-[#0076CE] "
            >
              Register
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="lg:hidden self-end" justify="center">
          <NavbarMenuToggle
            className="text-black py-1"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>
        <NavbarMenu className="mt-8 pt-4">
          {menuItems?.map((item, i) => {
            return (
              <NavbarMenuItem className="my-3" key={i}>
                {item.isDropDown ? (
                  <Dropdown>
                    <NavbarItem>
                      <DropdownTrigger>
                        <Button
                          disableRipple
                          className="flex p-3  items-center bg-transparent data-[hover=true]:bg-transparent"
                          endContent={<Down fill="#0076CE" size={16} />}
                          radius="sm"
                          variant="light"
                        >
                          <p className="font-poppins font-bold text-px18 text-black">
                            {item.option}
                          </p>
                        </Button>
                      </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                      aria-label="ACME features"
                      className="w-[340px]"
                      itemClasses={{
                        base: "gap-4",
                      }}
                    >
                      <DropdownItem
                        key="autoscaling"
                        description="some description..."
                      >
                        some otpions...
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                ) : (
                  <NavbarItem key={i}>
                    <Link
                      className={classNames(
                        "p-3 font-poppins font-bold text-px18 text-black bg-transparent data-[hover=true]:bg-transparent",
                        {
                          "text-[#C491D7]": item.option === activeLink,
                          "text-black": item.option !== activeLink,
                        }
                      )}
                      href={item?.link}
                      onClick={() => setActiveLink(item?.option)}
                    >
                      <p className="font-poppins font-bold text-px18 text-black">
                        {item.option}
                      </p>
                    </Link>
                  </NavbarItem>
                )}
              </NavbarMenuItem>
            );
          })}
          <NavbarMenuItem className="flex gap-6 mt-5">
            <NavbarItem>
              <Button
                radius="full"
                as={Link}
                href="#download"
                variant="flat"
                className="flex !w-[100px] rounded-xl text-center font-poppins font-bold sm:max-w-[220px] text-[#0076CE] bg-white border-2 border-solid border-[#0076CE]"
              >
                Login
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button
                radius="full"
                as={Link}
                href="#download"
                variant="flat"
                className="py-2.5 px-5 !w-[100px] rounded-xl text-center font-poppins font-bold sm:max-w-[220px] text-white bg-[#0076CE] "
              >
                Register
              </Button>
            </NavbarItem>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
