import React from "react";

const IconCircle = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <div className="icon-circle">
      <div>{icon}</div>
    </div>
  );
};

export default IconCircle;
