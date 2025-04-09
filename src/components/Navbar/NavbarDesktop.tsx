import Image from "next/image";
import { Button } from "@/components/ui/button"

const NavbarDesktop = () => {

    const logoUrl = "https://cdn.sanity.io/images/t64y86n0/production/d47fc36ca05580f9998c039ac6ed7e1aeacb8d3b-1018x1080.png";

    return (
        <nav className="text-[#7886C7] p-2 border-[#d3d3d3] border-b-[1px]">
          <div className="container mx-auto flex justify-between items-center">
            <Image src={logoUrl} alt="Logo" className="h-20" width={100} height={100} />
            <div className="flex gap-4">
              <Button variant="link" className="font-bold text-[#7886C7]">
                Acerca de
              </Button>
              <Button variant="link" className="font-bold text-[#7886C7]">
                Try FlowlyMeet
              </Button>
              <Button type="submit" variant="outline" className="rounded-full text-[#7886C7] border-[#7886C7] hover:text-[#7886C7] px-8">
                Regístrate
              </Button>
              <Button type="submit" className="w-full bg-[#7886C7] hover:bg-[#A9B5DF] rounded-full font-bold px-8">
                Iniciar sesión
              </Button>
            </div>
          </div>
        </nav>
    );
};
  
export default NavbarDesktop;