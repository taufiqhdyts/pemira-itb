import { Flex } from "@chakra-ui/react";
import { Navbar } from "./Navbar";

export const Layout = ({ children,bg }) => {
  return (
    <Flex flexDir="column" p="1em" backgroundImage={bg} backgroundAttachment="fixed" minH="100vh" minW="100vw" backgroundSize="cover">
      <Navbar />
      {children}
    </Flex>
  );
};
