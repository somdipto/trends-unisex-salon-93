
import EditableOfferCard from "./EditableOfferCard";

interface Offer3Props {
  isActive: boolean;
  position: number;
  onClick: () => void;
}

const Offer3 = ({ isActive, position, onClick }: Offer3Props) => {
  return (
    <EditableOfferCard
      id={3}
      title="Hydra Glow"
      price="₹1999"
      image="/lovable-uploads/7a27304e-c7da-44d1-8dbc-13700c1fdb66.png"
      isActive={isActive}
      position={position}
      onClick={onClick}
    />
  );
};

export default Offer3;
