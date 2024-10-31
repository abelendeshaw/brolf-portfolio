"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Card {
  id: number;
  src: string;
  content: string;
  className?: string;
}

interface LayoutGridProps {
  cards: Card[];
}

interface ImageComponentProps {
  card: Card;
}

interface SelectedCardProps {
  selected: Card;
  onClose: () => void;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ card }) => {
  return (
    <motion.div
      layoutId={`image-${card.id}`}
      className="relative w-full h-full overflow-hidden rounded-lg"
    >
      <Image
        src={card.src}
        alt={`Card ${card.id}`}
        fill
        className="object-cover transition-transform duration-300 hover:scale-105"
        sizes="(max-width: 600px) 100vw, (max-width: 800px) 50vw, 33vw"
      />
    </motion.div>
  );
};

const SelectedCard: React.FC<SelectedCardProps> = ({ selected, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
      onClick={onClose}
    >
      <motion.div
        layoutId={`image-${selected.id}`}
        className="relative max-w-4xl w-full h-[80vh] rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={selected.src}
          alt={`Card ${selected.id}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent"
        >
          <h3 className="text-white text-xl font-semibold">{selected.content}</h3>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const LayoutGrid: React.FC<LayoutGridProps> = ({ cards }) => {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 h-[600px]">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className={`relative cursor-pointer ${card.className}`}
            onClick={() => setSelectedCard(card)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <ImageComponent card={card} />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCard && (
          <SelectedCard
            selected={selectedCard}
            onClose={() => setSelectedCard(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default LayoutGrid;