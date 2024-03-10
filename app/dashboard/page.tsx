"use client";
import React, { useEffect } from "react";
import Block from "../components/Block";
import useSecondPage from "../hooks/secondPage";
import withProvider from "../hoc/withProvider";
import Card from "@mui/material/Card/Card";

const SecondPage = () => {
  const { carDetails } = useSecondPage();
  return (
    <Block>
      <div>
        {carDetails.map((item: any, index: number) => (
          <Card
            key={index.toString()}
            // className="h-40 p-4 flex items-center justify-center"
            style={{width: '10%'}}
          >
            <p>{item.model}</p>
          </Card>
        ))}
      </div>
    </Block>
  );
};

export default withProvider(SecondPage);
