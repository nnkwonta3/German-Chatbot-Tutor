import React, { useEffect } from "react";
import { IoIosLogIn } from "react-icons/io";
import { Box, Typography, Button } from "@mui/material";
import CustomizedInput from "../components/shared/CustomizedInput";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      toast.loading("Signing Up", { id: "signup" });
      await auth?.signup(name, email, password);
      toast.success("Signed Up Successfully", { id: "signup" });
    } catch (error) {
      console.log(error);
      toast.error("Signing Up Failed", { id: "signup" });
    }
  };
  useEffect(() => {
    if (auth?.user) {
      return navigate("/chat");
    }
  }, [auth]);
  return (
      <Box width="100%" height="100vh" display="flex" justifyContent="center" alignItems="center">
          <Box padding={8} display={{ md: "flex", sm: "none", xs: "none" }}>
              {/* Add any other content here if needed */}
          </Box>
          <Box
              display="flex"
              flex={{ xs: 1, md: 0.5 }}
              justifyContent="center"
              alignItems="center"
              padding={2}
          >
              <form
                  onSubmit={handleSubmit}
                  style={{
                      margin: "auto",
                      padding: "30px",
                      boxShadow: "10px 10px 20px #000",
                      borderRadius: "10px",
                      border: "none",
                  }}
              >
                  <Box
                      sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                      }}
                  >
                      <Typography
                          variant="h4"
                          textAlign="center"
                          padding={2}
                          fontWeight={600}
                          color= "#E1C16E"
                      >
                          Signup
                      </Typography>
                      <CustomizedInput type="text" name="name" label="Name" />
                      <CustomizedInput type="email" name="email" label="Email" />
                      <CustomizedInput type="password" name="password" label="Password" />
                      <Button
                          type="submit"
                          sx={{
                              px: 2,
                              py: 1,
                              mt: 2,
                              width: "400px",
                              borderRadius: 2,
                              bgcolor: "#8B0000",
                              color: "#1B1212",
                              ":hover": {
                                  bgcolor: "#1B1212",
                                  color: "#8B0000",
                              },
                          }}
                          endIcon={<IoIosLogIn />}
                      >
                          Signup
                      </Button>
                  </Box>
              </form>
          </Box>
      </Box>

  );
};

export default Signup;
