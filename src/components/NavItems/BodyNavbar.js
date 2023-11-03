import React from "react";
import Container from "../Container/Container";
import NormalCard from "../Container/NormalCard";
import BodyNavItems from "./BodyNavItems";
import { useLocation } from "react-router-dom";

const BodyNavbar = () => {
  const location = useLocation();
  if (location.pathname === "/profile") {
    return null;
  }
  return (
    <>
      <Container>
        <NormalCard>
          <div className="flex justify-evenly">
            <BodyNavItems title="Transactions" path={"transactions"} div={true} />
            <BodyNavItems title="Analysis" path={"analysis"} div={true} />
            <BodyNavItems title="Account" path={"account"} />
          </div>
        </NormalCard>
      </Container>
    </>
  );
};

export default BodyNavbar;
