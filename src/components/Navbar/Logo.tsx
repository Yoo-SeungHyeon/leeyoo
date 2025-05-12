const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="100"
      height="32"
      viewBox="0 0 100 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <text
        x="0"
        y="24"
        fontFamily="Arial, sans-serif"
        fontSize="24"
        fontWeight="bold"
        fill="url(#gradient)"
      >
        LeeYoo
      </text>
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="var(--gradient-start)" />
          <stop offset="100%" stopColor="var(--gradient-mid)" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
