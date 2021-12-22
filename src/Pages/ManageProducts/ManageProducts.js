import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/products/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("Are you sure you want to delete ?");
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        }
      });
  };

  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          mt: 7,
          mb: 5,
          fontStyle: "italic",
          color: "#dc2f02",
          fontWeight: "bold",
        }}
      >
        Manage Products
      </Typography>

      {products.map((product) => (
        <Box key={product._id}>
          <Typography
            sx={{
              mt: 5,

              fontStyle: "italic",
              color: "black",
              fontWeight: "bold",
            }}
          >
            {product.name}
          </Typography>

          <br />
          <Button variant="contained" onClick={() => handleDelete(product._id)}>
            Delete
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default ManageProducts;
