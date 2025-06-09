
import EditableOfferCard from "./EditableOfferCard";

interface Offer6Props {
  isActive: boolean;
  position: number;
  onClick: () => void;
}

const Offer6 = ({ isActive, position, onClick }: Offer6Props) => {
  return (
    <EditableOfferCard
      id={6}
      title="Ultimate Smoothening"
      price="₹5500"
      image="/lovable-uploads/d8f90cd0-77fd-4d78-a4e9-8be45c4a46b1.png"
      isActive={isActive}
      position={position}
      onClick={onClick}
    />
  );
};

export default Offer6;
