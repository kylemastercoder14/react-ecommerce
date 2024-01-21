import { SignIn } from "@clerk/clerk-react"
import { Box } from "@mui/material";
 
export default function SignInPage() {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" marginTop="80px">
      <SignIn />
    </Box>
  );
}