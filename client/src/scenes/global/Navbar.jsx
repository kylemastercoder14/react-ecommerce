
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton, Typography } from "@mui/material";
import {
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../../state";
import { shades } from "../../theme";
import { UserButton, useUser } from "@clerk/clerk-react";

export default function Navbar() {
  const { isSignedIn, isLoaded, user } = useUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="rgba(255, 255, 255, 0.95)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          fontSize={"23px"}
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.primary[200]}
        >
          ThriftShop
        </Box>
        <Box display="flex" justifyContent="space-between" columnGap="20px" zIndex="2">
          {!isSignedIn || !isLoaded ? (
            <Box backgroundColor="black" color="white" sx={{ "&:hover": { cursor: "pointer" } }} padding="10px" display="flex" alignItems="center" onClick={() => navigate("signin")}>
              Sign In
            </Box>
          ) : (
            <>
              <Box display="flex" justifyContent="center" alignItems="center" columnGap="10px" >
                <UserButton afterSignOutUrl="/" />
                <Typography>
                  {user.fullName}
                </Typography>
              </Box>
              <Box display="flex" padding="10px" backgroundColor="black" color="white" sx={{ "&:hover": { cursor: "pointer" } }} onClick={() => navigate("orders")} justifyContent="center" alignItems="center" columnGap="10px" >
                Orders
              </Box>
            </>
            
          )}
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton onClick={() => dispatch(setIsCartOpen({}))} sx={{ color: "black" }}>
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
        </Box>
      </Box>
    </Box>
  );
}
