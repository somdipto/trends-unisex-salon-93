import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const Menu = () => {
  const menuItems = {
    "CUT & STYLE": [
      { name: "BOY CUT", price: "₹150" },
      { name: "GIRL CUT", price: "₹400" },
      { name: "MAN CUT", price: "₹200" },
      { name: "WOMEN CUT BLOW-DRY", price: "₹700" },
      { name: "TEMPORARY STYLING", price: "₹800" },
      { name: "MAN BEARD TRIM", price: "₹100" },
      { name: "HAIR WASH", price: "₹300" },
    ],
    "TEXTURE": [
      { name: "STRAIGHTENING", price: "₹6000" },
      { name: "SMOOTHENING", price: "₹5000" },
      { name: "ROOT TOUCH UP (UPTO 4 INCH)", price: "₹2000" },
      { name: "KERATIN", price: "₹7000" },
      { name: "Nanoplastia", price: "₹9000" },
      { name: "MEN KERATIN", price: "₹2500" },
      { name: "Coco cabana BOTOX", price: "₹9000" },
    ],
    "COLOR LAB": [
      { name: "STREAK", price: "₹300" },
      { name: "CRAZY COLOR STREAK", price: "₹700" },
      { name: "ROOT TOUCH UP (UPTO 2 INCH)", price: "₹1000" },
      { name: "GLOBAL", price: "₹4000" },
      { name: "BALAYAGE | OMBRE | HIGHLIGHTS", price: "₹5000" },
      { name: "CRAZY COLOR", price: "₹7000" },
      { name: "MEN GLOBAL HAIR", price: "₹700" },
      { name: "MEN HIGHLIGHTS (UPTO 4 INCH)", price: "₹2500" },
    ],
    "HAIR CARE": [
      { name: "HAIR SPA", price: "₹700" },
      { name: "HAIR SPA (ANTI HAIR FALL)", price: "₹800" },
      { name: "HAIR SPA (ANTI DANDRUFF)", price: "₹800" },
      { name: "OLAPLEX HAIR SPA", price: "₹1000" },
      { name: "OLAPLEX TREATMENT", price: "₹3000" },
      { name: "HEAD MASSAGE (20 min)", price: "₹400" },
      { name: "HEAD MASSAGE (WITH HAIR WASH)", price: "₹700" },
    ],
    "SKIN CARE": [
      { name: "CLASSIC CLEAN-UP", price: "₹1000" },
      { name: "O3 WHITENING CLEAN-UP", price: "₹2500" },
      { name: "O3 SEAWEED CLEAN-UP", price: "₹2500" },
    ],
    "O3 FACIAL": [
      { name: "O3 WHITENING FACIAL", price: "₹3500" },
      { name: "O3 SEAWEED FACIAL", price: "₹3500" },
    ],
    "NAIL CARE": [
      { name: "REGULAR PEDICURE", price: "₹500" },
      { name: "REGULAR MANICURE", price: "₹500" },
      { name: "FOOT MASSAGE", price: "₹500" },
      { name: "HEELS PEEL TREATMENT", price: "₹1500" },
      { name: "AVL PEDICURE SPA", price: "₹1200" },
      { name: "AVL MANICURE SPA", price: "₹1200" },
      { name: "BOMBINI ICECREAM PEDICURE", price: "₹3000" },
      { name: "BOMBINI ICECREAM MANICURE", price: "₹3000" },
      { name: "ALGA PEDICURE", price: "₹3000" },
      { name: "ALGA MANICURE", price: "₹3000" },
    ],
    "RICA WAXING": [
      { name: "HALF LEG", price: "₹500" },
      { name: "FULL LEG", price: "₹800" },
      { name: "HALF ARMS", price: "₹400" },
      { name: "FULL ARMS", price: "₹500" },
      { name: "FULL BODY", price: "₹3000" },
      { name: "BIKINI LINE", price: "₹1200" },
      { name: "FULL BACK", price: "₹1000" },
      { name: "STOMACH", price: "₹300" },
      { name: "UPPER LIP", price: "₹100" },
      { name: "FULL FACE", price: "₹350" },
      { name: "SIDE LOCKS", price: "₹200" },
      { name: "UNDER ARMS", price: "₹200" },
      { name: "FOREHEAD | CHIN", price: "₹250" },
      { name: "BIKINI", price: "₹2500" },
    ],
    "HONEY WAXING": [
      { name: "HALF LEG", price: "₹300" },
      { name: "FULL LEG", price: "₹450" },
      { name: "HALF ARMS", price: "₹300" },
      { name: "FULL ARMS", price: "₹400" },
      { name: "FULL BODY", price: "₹2000" },
      { name: "FULL BACK", price: "₹600" },
      { name: "STOMACH", price: "₹300" },
      { name: "UPPER LIP", price: "₹100" },
      { name: "FULL FACE", price: "₹250" },
      { name: "SIDE LOCKS", price: "₹180" },
      { name: "UNDER ARMS", price: "₹200" },
      { name: "FOREHEAD | CHIN", price: "₹250" },
      { name: "BIKINI", price: "₹1800" },
    ],
    "CHOCOLATE WAXING": [
      { name: "HALF LEG", price: "₹330" },
      { name: "FULL LEG", price: "₹450" },
      { name: "HALF ARMS", price: "₹350" },
      { name: "FULL ARMS", price: "₹400" },
      { name: "FULL BODY", price: "₹2500" },
      { name: "FULL BACK", price: "₹800" },
      { name: "STOMACH", price: "₹300" },
      { name: "UPPER LIP", price: "₹80" },
      { name: "FULL FACE", price: "₹300" },
      { name: "SIDE LOCKS", price: "₹180" },
      { name: "UNDER ARMS", price: "₹180" },
      { name: "FOREHEAD | CHIN", price: "₹200" },
      { name: "BIKINI", price: "₹2000" },
    ],
    "BEAUTY": [
      { name: "GOJI BERRY PEEL OFF MASK", price: "₹1000" },
      { name: "EYEBROWS", price: "₹50" },
      { name: "UPPER LIP THREADING", price: "₹30" },
      { name: "LOWER LIP THREADING", price: "₹30" },
      { name: "CHIN THREADING", price: "₹30" },
      { name: "FULL FACE THREADING", price: "₹200" },
      { name: "FOREHEAD THREADING", price: "₹30" },
      { name: "SIDE LOCK THREADING", price: "₹180" },
    ],
    "DE-TAN": [
      { name: "FACE NECK", price: "₹600" },
      { name: "UNDERARMS", price: "₹400" },
      { name: "FULL BACK", price: "₹1000" },
      { name: "HALF ARMS", price: "₹550" },
      { name: "FULL ARMS", price: "₹800" },
      { name: "HALF LEGS", price: "₹600" },
      { name: "FULL LEGS FULL BODY", price: "₹2200" },
    ],
    "BASE": [
      { name: "GEL POLISH", price: "₹500" },
      { name: "GEL NAILS (SOLID COLORS)", price: "₹1000" },
      { name: "NEON POWER SHIMMER/GLITTER", price: "₹2000" },
      { name: "OMBRE ART", price: "₹2000" },
      { name: "CHROME NAIL", price: "₹1700" },
      { name: "ANIMAL ARTS", price: "₹2000" },
      { name: "ACRYLIC NAILS", price: "₹3000" },
      { name: "NAILS ARTS", price: "₹2000" },
      { name: "3D NAILS", price: "₹3500" },
      { name: "STONE AND DIAMOND NAILS ART AND DESIGNS", price: "₹3500" },
    ],
    "HYDRA GLOW": [
      { name: "BRIGHT HYDRA GLAM", price: "₹2000" },
      { name: "FINE LINE HYDRA GLAM", price: "₹4000" },
      { name: "ACNE CONTROL", price: "₹5000" },
      { name: "HYDRATING SKIN", price: "₹4500" },
    ],
    "PEDICURE":[
      {name: "REGULAR PEDICURE" , price:"₹500"},
      {name: "MANICURE" , price:"₹500"},
      {name: "FOOT MASSAGE" , price:"₹500"},
      {name: "HEELS PEEL TREATMENT" , price: "₹1500"},
      {name: "AVL PEDICURE SPA" , price : "1200"},
      {name: "AVL MANICURE SPA" , price: "₹1200"},
      {name: "BOMBINI ICE-CREAM PEDICURE" , price: "₹3000"},
      {name: "BOMBINI ICE-CREAM MANICURE" , price: "₹3000"},
      {name: "ALGA PEDICURE" , price: "₹3000"},
      {name: "ALGA MANICURE" , price: "₹3000"},
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-serif mb-4">Our Menu</h1>
          <p className="text-gray-600">Comprehensive list of our services</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {Object.entries(menuItems).map(([category, items]) => (
            <div key={category} className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-serif mb-6 pb-2 border-b border-gray-200 text-center">
                {category}
              </h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.name} className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-medium text-lg">{item.name}</h3>
                    </div>
                    <span className="text-lg font-medium ml-4">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;