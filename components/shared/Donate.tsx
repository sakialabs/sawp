import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Link from "next/link";

export const DonateButton = () => {
  return (
    <Button
      asChild
      size="lg"
      className="w-full md:w-auto bg-sudan-green hover:bg-[#005720] text-sudan-white transition-colors group [&:hover_svg]:fill-current"
    >
      <Link href="https://sapa-usa.org/ramadan-for-sudan/" target="_blank">
        Donate Now
        <Heart className="ml-2 h-4 w-4 transition-all group-hover:scale-110" />
      </Link>
    </Button>
  );
};

export default DonateButton;
