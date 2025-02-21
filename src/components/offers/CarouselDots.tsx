
interface CarouselDotsProps {
  total: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
}

const CarouselDots = ({ total, activeIndex, onDotClick }: CarouselDotsProps) => {
  return (
    <div className="flex justify-center mt-8 space-x-2">
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            index === activeIndex ? "bg-black w-8" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default CarouselDots;
