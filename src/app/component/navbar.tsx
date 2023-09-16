import Link from "next/link";
import React from "react";

const navbar = () => {
  return (
    <div className="p-2 mb-1 bg-orange-500">
      <ul className="flex justify-between">
        <Link href="/dashboard">
          <>Home</>
        </Link>
        <li>About</li>
        <li>Services</li>
        <li>Contact us</li>
        <li>Feedback</li>
      </ul>
    </div>
  );
};

export default navbar;
