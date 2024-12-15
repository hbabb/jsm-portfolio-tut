import type React from "react";

/**
 * UI: border magic from tailwindcss buttons
 * Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 * change border radius to rounded-lg
 * add margin of md:mt-10
 * remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    // biome-ignore lint/a11y/useButtonType: <explanation>
    <button
      className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:mt-10 md:w-60"
      onClick={handleClick}
    >
      <span className="insert-[-1000%] absolute animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e2cbff_0%,#393bb2_50%,#e2cbff_100%)]" />

      {/* remove px-3 py-1, add px-5 gap-2 */}
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-slate-950 px-7 font-medium text-sm text-white backdrop-blur-3xl ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
