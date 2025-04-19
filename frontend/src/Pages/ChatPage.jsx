import React from "react";
import { ChatState } from "../Context/ChatProvider";
import Header from "../components/Miscellaneous/Header";
import { Box } from "@chakra-ui/layout";

const ChatPage = () => {
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <Header h="10vh" />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        <h1>Chat Page</h1>
      </Box>
    </div>
  );
};
export default ChatPage;
