
import EditableOfferCard from "./EditableOfferCard";

interface Offer5Props {
  isActive: boolean;
  position: number;
  onClick: () => void;
}

const Offer5 = ({ isActive, position, onClick }: Offer5Props) => {
  return (
    <EditableOfferCard
      id={5}
      title="Classic Smoothening"
      price="₹2999"
      image="/lovable-uploads/e465a833-ca5f-4b02-9b1b-3fa6e811e03d.png"
      isActive={isActive}
      position={position}
      onClick={onClick}
    />
  );
};

export default Offer5;
