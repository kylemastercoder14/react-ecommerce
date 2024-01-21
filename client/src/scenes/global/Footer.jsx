import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor="black">
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.primary[200]}
          >
            ThriftShop
          </Typography>
          <div style={{color: 'white'}}>
          Welcome to ThriftShop, your ultimate destination for affordable and stylish finds! Explore a diverse range of high-quality pre-loved items, including trendy shoes, fashionable clothes, sleek watches, and cutting-edge electronics. At ThriftShop, we curate a unique collection that combines affordability with quality, giving you access to top-notch products without breaking the bank.
          </div>
        </Box>

        <Box>
          <Typography color={"white"} variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography color={"white"} mb="30px">Careers</Typography>
          <Typography color={"white"} mb="30px">Our Stores</Typography>
          <Typography color={"white"} mb="30px">Terms & Conditions</Typography>
          <Typography color={"white"} mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography color={"white"} variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography color={"white"} mb="30px">Help Center</Typography>
          <Typography color={"white"} mb="30px">Track Your Order</Typography>
          <Typography color={"white"} mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography color={"white"} mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography color={"white"} variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography color={"white"} mb="30px">
            Address: Some Address, Some City, Some Province
          </Typography>
          <Typography color={"white"} mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: someemail@gmail.com
          </Typography>
          <Typography color={"white"} mb="30px">Contact Number: 09123123</Typography>
          <Typography color={"white"} mb="30px">Developed By: Christian Montero, Jeffree Lingal, Dem Charles Bule and Albert Retiza</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
