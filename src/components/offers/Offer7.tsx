
import EditableOfferCard from "./EditableOfferCard";

interface Offer7Props {
  isActive: boolean;
  position: number;
  onClick: () => void;
}

const Offer7 = ({ isActive, position, onClick }: Offer7Props) => {
  return (
    <EditableOfferCard
      id={7}
      title="Gold Smoothening"
      price="₹3999"
      image="/lovable-uploads/3c08fed0-16c0-4442-88eb-1c05978fe4db.png"
      isActive={isActive}
      position={position}
      onClick={onClick}
    />
  );
};

export default Offer7;
