import { Images } from "@/app/assets";
import { Box, Card, CardActionArea, Typography } from "@mui/material";
import React from "react";
import Block from "../Block";
import FormDialog from "../FormDialog";
import Image from "next/image";
import useHome from "@/app/hooks/home";

const MainBlock = () => {
  const homeData = useHome();
  return (
    <Block>
      <Box
        component="section"
        my={4}
        display={"flex"}
        alignItems={"center"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        gap={4}
        p={2}
        border={2}
      >
        {Object.keys(Images.carLogos).map((items, index) => {
          return (
            <Card
              key={index.toString()}
              className="h-40 p-4 flex items-center justify-center"
            >
              <Image
                onClick={homeData.handleClickOpen}
                src={Images.carLogos[items]}
                alt={items}
                width={200}
                height={200}
                priority
              />
            </Card>
          );
        })}
        <Card
          key={"more"}
          className="h-40 px-24 flex items-center justify-center"
        >
          <CardActionArea onClick={() => homeData.router.push("/dashboard")}>
            <Typography
              style={{ fontSize: 14, fontWeight: "bold", color: "navy" }}
            >
              {"More..."}
            </Typography>
          </CardActionArea>
        </Card>
        <FormDialog open={homeData.open} handleClose={homeData.handleClose} />
      </Box>
      <Box
        component="section"
        my={4}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        gap={4}
        p={2}
        border={2}
      >
        <div>
          <pre>{JSON.stringify(homeData.carDetails, null, 2)}</pre>
        </div>
      </Box>
    </Block>
  );
};
export default MainBlock;
