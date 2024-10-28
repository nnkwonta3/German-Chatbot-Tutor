import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function extractCodeFromString(message: string) {
  if (message.includes("```")) {
    const blocks = message.split("```");
    return blocks;
  }
}

function isCodeBlock(str: string) {
  if (
    str.includes("=") ||
    str.includes(";") ||
    str.includes("[") ||
    str.includes("]") ||
    str.includes("{") ||
    str.includes("}") ||
    str.includes("#") ||
    str.includes("//")
  ) {
    return true;
  }
  return false;
}
const ChatItem = ({
  content,
  role,
}: {
  content: string;
  role: "user" | "assistant";
}) => {
  const messageBlocks = extractCodeFromString(content);
  const auth = useAuth();
  return role == "assistant" ? (
    <Box
      sx={{
        display: "flex",
        p: 2,
        bgcolor: "#1B1212",
        gap: 3,
        borderRadius: 5,
        my: 1,
      }}
    >
      <Avatar sx={{ ml: "0" }}>
        <img src="german-icon.jpg" alt="german-icon" width={"30px"} />
      </Avatar>
      <Box>
        {!messageBlocks && (
          <Typography sx={{ color: "#E1C16E", fontSize: "25px" }}>{content}</Typography>
        )}
        {messageBlocks &&
          messageBlocks.length &&
          messageBlocks.map((block) =>
            isCodeBlock(block) ? (
              <SyntaxHighlighter style={coldarkDark} language="javascript">
                {block}
              </SyntaxHighlighter>
            ) : (
              <Typography sx={{ fontSize: "20px" }}>{block}</Typography>
            )
          )}
      </Box>
    </Box>
  ) : (
      <Box
          sx={{
              display: "flex",
              p: 2,
              bgcolor: "#800000",
              gap: 3,
              borderRadius: 2,
              justifyContent: "space-between",
              alignItems: "center",
          }}
      >
          <Box>
              {!messageBlocks && (
                  <Typography sx={{ color: "#E1C16E", fontSize: "25px" }}>{content}</Typography>
              )}
              {messageBlocks &&
                  messageBlocks.length &&
                  messageBlocks.map((block) =>
                      isCodeBlock(block) ? (
                          <SyntaxHighlighter style={coldarkDark} language="javascript">
                              {block}
                          </SyntaxHighlighter>
                      ) : (
                          <Typography sx={{ fontSize: "20px" }}>{block}</Typography>
                      )
                  )}
          </Box>

          <Avatar sx={{ bgcolor: "#800000", color: "#1B1212" }}>
              {auth?.user?.name[0]}
              {auth?.user?.name.split(" ")[1][0]}
          </Avatar>
      </Box>

  );
};

export default ChatItem;
