import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaRegGrinAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div className="">
      <h1 className="text-3xl text-blue-400">Hello world </h1>
      <Button
        as={Link}
        href="/members"
        color="primary"
        variant="bordered"
        startContent={<FaRegGrinAlt />}
      >
        Click me
      </Button>
    </div>
  );
}
