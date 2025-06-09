
import EditableOfferCard from "./EditableOfferCard";

interface Offer4Props {
  isActive: boolean;
  position: number;
  onClick: () => void;
}

const Offer4 = ({ isActive, position, onClick }: Offer4Props) => {
  return (
    <EditableOfferCard
      id={4}
      title="Hair Botox"
      price="₹4499"
      image="/lovable-uploads/9a2f0fd5-38f8-4965-b51f-220ffb1ad1f8.png"
      isActive={isActive}
      position={position}
      onClick={onClick}
    />
  );
};

export default Offer4;
