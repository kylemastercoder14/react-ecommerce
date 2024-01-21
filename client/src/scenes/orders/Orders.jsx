import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Typography,
  Box,
} from "@mui/material";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:2000/api/orders", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        const { data } = responseData;

        if (Array.isArray(data)) {
          setOrders(data);
        } else {
          throw new Error("Invalid data structure. Expected an array.");
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError("Error fetching orders. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <Box marginTop="80px" paddingX="180px">
        <TableContainer>
      {loading ? (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <CircularProgress />
          <Typography variant="body1">Loading orders...</Typography>
        </div>
      ) : error ? (
        <Typography
          variant="body1"
          color="error"
          style={{ textAlign: "center" }}
        >
          {error}
        </Typography>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>EMAIL ADDRESS</TableCell>
              <TableCell>ORDER ID</TableCell>
              <TableCell>ORDER DATE</TableCell>
              {/* Add more table headers based on your order model */}
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.attributes.userName}</TableCell>
                <TableCell>{order.attributes.stripeSessionId}</TableCell>
                <TableCell>{new Date(order.attributes.createdAt).toLocaleString()}</TableCell>
                {/* Add more table cells based on your order model */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
    </Box>
  );
};

export default Orders;
