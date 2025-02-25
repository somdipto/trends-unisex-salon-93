
export const handleBooking = (packageName: string, price: number) => {
  const message = `Hi, I would like to book the ${packageName} for ₹${price}. Please let me know the available time slots.`;
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/917633894003?text=${encodedMessage}`, '_blank');
};

