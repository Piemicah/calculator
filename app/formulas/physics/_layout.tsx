import DrawerLayout from "@/components/DrawerLayout";
import PhysicsDrawerElements from "@/components/PhysicsDrawerElements";
import React from "react";

const PhysicsLayout = () => {
  return (
    <DrawerLayout
      title="Physics Formulas"
      drawerComponents={(props) => <PhysicsDrawerElements {...props} />}
    />
  );
};

export default PhysicsLayout;
