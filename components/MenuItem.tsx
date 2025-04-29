import { motion } from 'framer-motion';

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

export default function MenuItem({ name, description, price, image }: MenuItemProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden h-full"
    >
      <div className="h-40 sm:h-48 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      <div className="p-4 sm:p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-lg sm:text-xl font-serif text-coffee-dark">{name}</h3>
          <span className="text-base sm:text-lg font-medium text-coffee">{price}</span>
        </div>
        <p className="mt-2 text-sm sm:text-base text-seattle-gray">{description}</p>
      </div>
    </motion.div>
  );
} 