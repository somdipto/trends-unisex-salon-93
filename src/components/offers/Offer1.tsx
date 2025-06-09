
import EditableOfferCard from "./EditableOfferCard";

interface Offer1Props {
  isActive: boolean;
  position: number;
  onClick: () => void;
}

const Offer1 = ({ isActive, position, onClick }: Offer1Props) => {
  return (
    <EditableOfferCard
      id={1}
      title="Mix & Match"
      price="₹2499"
      image="/lovable-uploads/b5ea46d1-7f1e-4d52-9bea-f87c5ebe869a.png"
      isActive={isActive}
      position={position}
      onClick={onClick}
    />
  );
};

export default Offer1;
