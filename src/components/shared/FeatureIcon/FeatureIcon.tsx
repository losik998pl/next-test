import React from "react";
import Image from "next/image";

const FeatureIcon: React.FC<{ path: string }> = ({ path }) => {
  return (
    <Image
        priority
        src={path}
        height={50}
        width={50}
        alt={path.slice(1, path.length - 4)}
      />
  );
};

export default FeatureIcon;
