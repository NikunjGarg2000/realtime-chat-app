import { Box, HStack } from "@chakra-ui/react";
import ChatBox from "../Components/ChatBox";
import SideDrawer from "../Components/SideDrawer";
import MyChats from "../Components/MyChats";
import { ChatState } from "../Context/ChatProvider";
import { useState } from "react";

const ChatPage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <HStack
        d="flex"
        justifyContent="space-between"
        w="100%"
        h="90.5vh"
        p="10px"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </HStack>
    </div>
  );
};

export default ChatPage;
