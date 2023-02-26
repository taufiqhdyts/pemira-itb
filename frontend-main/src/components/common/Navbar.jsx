import { Flex, Button } from "@chakra-ui/react";

const NavButton = ({ children }) => {
  return <Button bg="none" fontSize="lg" _hover={{color: "coffee"}} _active={{}}>{children}</Button>;
};

export const Navbar = () => {
  return (
    <Flex width="100%" height="2em" alignItems="center">
      <NavButton pr="1em">Home</NavButton>
      <NavButton>Guide Voting</NavButton>
    </Flex>
  );
};
