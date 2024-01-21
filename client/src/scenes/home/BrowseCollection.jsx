import React from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";

const collections = [
  { name: "Clothes", image: "clothes.jpg" },
  { name: "Shoes", image: "shoes.jpg" },
  { name: "Watches", image: "watch.jpg" },
  { name: "Electronics", image: "electronics.jpg" },
];

const BrowseCollection = () => {
  return (
    <Container>
      <Box marginTop={"30px"}>
        <Typography variant="h3" textAlign="center">
          Our Featured <b>Collections</b>
        </Typography>
        <Grid marginTop={"30px"} container spacing={3}>
          {collections.map((collection, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper elevation={3} style={{ padding: 20, textAlign: "center" }}>
                <img
                  src={`/assets/${collection.image}`}
                  alt={collection.name}
                  style={{
                    width: "200px",
                    height: "200px",
                    marginBottom: 10,
                    objectFit: "cover",
                  }}
                />
                <Typography variant="h6">{collection.name}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default BrowseCollection;
