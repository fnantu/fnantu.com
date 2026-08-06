import Image from "next/image";

interface AvatarProps {
  size?: "sm" | "md" | "lg";
  priority?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { width: 32, height: 32 },
  md: { width: 80, height: 80 },
  lg: { width: 120, height: 120 },
};

const classnameMap = {
  sm: "h-8 w-8",
  md: "h-20 w-20",
  lg: "h-32 w-32",
};

export function Avatar({
  size = "md",
  priority = false,
  className = "",
}: AvatarProps) {
  const { width, height } = sizeMap[size];
  const sizeClass = classnameMap[size];

  return (
    <Image
      src="/images/avatar.jpg"
      alt="Furkan Nantu"
      width={width}
      height={height}
      priority={priority}
      className={`rounded-full border border-violet-500/40 object-cover ${sizeClass} ${className}`.trim()}
    />
  );
}
