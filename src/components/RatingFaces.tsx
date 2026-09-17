// src/components/RatingFaces.tsx
"use client";
import Image from "next/image";
import { Rating } from "@/types/modal";

const RATING_IMAGES_PATH = "/images/rating";

const OPTIONS: { value: Rating; label: string }[] = [
  { value: 1, label: "Muito ruim" },
  { value: 2, label: "Ruim" },
  { value: 3, label: "Regular" },
  { value: 4, label: "Boa" },
  { value: 5, label: "Muito boa" },
];

export default function RatingFaces({
  value,
  onSelect,
}: {
  value: Rating | null;
  onSelect: (rating: Rating) => void;
}) {
  return (
    <div className="grid grid-cols-5 gap-2">
      {OPTIONS.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onSelect(opt.value)}
          className={`flex flex-col items-center gap-1 rounded-xl border p-1.5 text-xs transition
            ${value === opt.value ? "border-purple-600 bg-purple-50 ring-2 ring-purple-300" : "border-gray-200 hover:border-purple-300"}`}
        >
          <Image
            src={`${RATING_IMAGES_PATH}/${opt.value}.png`}
            alt={opt.label}
            width={64}
            height={64}
            className="h-16 w-16 object-contain"
          />
          <span className="text-center text-gray-600">{opt.label}</span>
        </button>
      ))}
    </div>
  );
}