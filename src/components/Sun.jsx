import React from "react";

const Sun = props => {
  return (
    <mesh {...props}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshBasicMaterial color={[10, 3, 0]} toneMapped={false} />
    </mesh>
  );
};

export default Sun;
