import { Link } from "react-router-dom";

import Abilogo from "../assets/abilogo.png"



export default function Logo({ withText = true }) {
  return (
    <Link
      to="/"
      className="flex items-center gap-2.5 font-display text-lg font-bold text-paper"
    >
      <img src={Abilogo} className="w-10 h-10"/>
    </Link>
  );
}
