interface AvatarProps {
  profilePictureUrl?: string;
  initials: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function Avatar({ profilePictureUrl, initials, size = "md", className = "" }: AvatarProps) {
  const sizeClasses = {
    sm: "w-9 h-9 text-sm",
    md: "w-12 h-12 text-base",
    lg: "w-20 h-20 text-2xl",
    xl: "w-24 h-24 text-3xl",
  };

  const baseClasses = `${sizeClasses[size]} rounded-full flex items-center justify-center shadow-md ${className}`;

  if (profilePictureUrl) {
    return (
      <img
        src={profilePictureUrl}
        alt="Profile"
        className={`${baseClasses} object-cover`}
      />
    );
  }

  return (
    <div className={`${baseClasses} bg-gradient-to-br from-blue-500 to-blue-600`}>
      <span className="text-white font-semibold">{initials}</span>
    </div>
  );
}
