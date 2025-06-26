import { Button, Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

export default function TopNav() {
  return (
    <Navbar
      // className="bg-gradient-to-r from-orange-300 to-orange-500"
      className="bg-purple-300"
      classNames={{
        item: ["text-lg", "text-white", "data-[active=true]:text-yellow-200"],
      }}
    >
      <NavbarBrand as={Link} href={"/"} className="gap-2">
        <Image
          className="rounded-xl"
          width={50}
          height={50}
          src={"/logo.png"}
          alt={"logo.png"}
        />
        <h1>KintDating</h1>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavLink href={"lists"} label={"Lists"} />

        <NavLink href={"messages"} label={"Message"} />
      </NavbarContent>
      <NavbarContent justify="end">
        <Button variant="bordered" as={Link} href="login">
          Login
        </Button>
        <Button variant="bordered" as={Link} href="register">
          Sign Up
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
