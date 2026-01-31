"use client";

import Image from "next/image";
import { Star } from "lucide-react";

interface Avatar {
  src: string;
  alt: string;
}

interface AvatarGroupProps {
  avatars: Avatar[];
  rating?: number;
  reviewCount?: number;
  className?: string;
}

export function AvatarGroup({
  avatars,
  rating = 5,
  reviewCount,
  className,
}: AvatarGroupProps) {
  const displayAvatars = avatars.slice(0, 4);

  return (
    <div
      className={`healthcare-trust-card healthcare-card-hover ${className || ""}`}
    >
      {/* Avatar Group */}
      <div className="healthcare-avatar-group">
        {displayAvatars.map((avatar, index) => (
          <div
            key={index}
            className="healthcare-avatar relative overflow-hidden"
            style={{ zIndex: displayAvatars.length - index }}
          >
            <Image
              src={avatar.src}
              alt={avatar.alt}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
        ))}
        {avatars.length > 4 && (
          <div
            className="healthcare-avatar flex items-center justify-center text-xs font-medium healthcare-text-secondary"
            style={{ zIndex: 0 }}
          >
            +{avatars.length - 4}
          </div>
        )}
      </div>

      {/* Rating and Text */}
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`healthcare-star ${
                i < rating ? "fill-current" : "text-gray-300"
              }`}
              size={14}
            />
          ))}
        </div>
        {reviewCount && (
          <span className="text-sm healthcare-text-secondary">
            Trusted by {reviewCount}+ individuals
          </span>
        )}
      </div>
    </div>
  );
}

