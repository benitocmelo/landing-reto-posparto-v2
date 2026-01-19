import React from 'react';

interface BiotechButtonProps {
  text: string;
  onClick?: () => void;
  fullWidth?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const BiotechButton: React.FC<BiotechButtonProps> = ({ 
  text, 
  onClick, 
  fullWidth = false,
  className = "",
  variant = 'primary'
}) => {
  const baseClasses = "relative group overflow-hidden rounded-full font-display font-bold text-lg md:text-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95";
  const primaryClasses = "bg-lime text-forest shadow-[0_0_20px_rgba(163,230,53,0.5)] hover:shadow-[0_0_40px_rgba(163,230,53,0.8)] animate-pulse-glow";
  const secondaryClasses = "bg-forest text-white shadow-lg border border-lime/30 hover:border-lime";

  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses} ${fullWidth ? 'w-full py-5' : 'px-8 py-4'} ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {text}
      </span>
      {/* Gloss effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
    </button>
  );
};

export default BiotechButton;