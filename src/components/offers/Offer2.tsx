
import EditableOfferCard from "./EditableOfferCard";

interface Offer2Props {
  isActive: boolean;
  position: number;
  onClick: () => void;
}

const Offer2 = ({ isActive, position, onClick }: Offer2Props) => {
  return (
    <EditableOfferCard
      id={2}
      title="Balayage"
      price="₹3999"
      image="/lovable-uploads/9651bd69-8c97-469b-9a0f-dae1ce0c6328.png"
      isActive={isActive}
      position={position}
      onClick={onClick}
    />
  );
};

export default Offer2;
