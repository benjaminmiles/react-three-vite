import React from "react";

const Sun = props => {
  return (
    <mesh {...props}>
      <sphereGeometry args={[3, 64, 64]} />
      <meshBasicMaterial color={[10, 4, 0]} toneMapped={false} />
    </mesh>
  );
};

export default Sun;
