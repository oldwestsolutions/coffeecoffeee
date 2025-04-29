import { motion } from 'framer-motion';
import { useState } from 'react';

interface GalleryProps {
  images: {
    src: string;
    title: string;
    description: string;
  }[];
}

export default function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer"
            onClick={() => setSelectedImage(index)}
          >
            <div 
              className="h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundImage: `url(${image.src})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white text-lg font-serif mb-1">{image.title}</h3>
              <p className="text-white/90 text-sm">{image.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Image Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative max-w-4xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${images[selectedImage].src})` }}
              />
            </div>
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setSelectedImage(null)}
                className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="bg-white p-6 rounded-b-lg">
              <h3 className="text-xl font-serif text-coffee-dark mb-2">{images[selectedImage].title}</h3>
              <p className="text-seattle-gray">{images[selectedImage].description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
} 