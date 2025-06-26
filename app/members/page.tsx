import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export default function Member() {
  return (
    <div>
      <h1 className="text-2xl">This a member page</h1>
      <p>We will do something fun here ...</p>
      <Button as={Link} href="/">
        Go back to home
      </Button>
    </div>
  );
}
