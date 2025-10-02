import DrawerLayout from "@/components/DrawerLayout";
import MathDrawerElements from "@/components/MathDrawerElements";
import React from "react";

const MathLayout = () => {
  return (
    <DrawerLayout
      title="Math Formulas"
      drawerComponents={(props) => <MathDrawerElements {...props} />}
    />
  );
};

export default MathLayout;
