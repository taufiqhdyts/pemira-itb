import { Flex, Text } from "@chakra-ui/react";
import { Layout } from "../components/common/Layout";
import { Sliding } from "../util/entrance-animation";

export const HomePage = () => {
  return (
    <Layout bg="/img/bg-home.webp">
      <Sliding from="bottom" slow>
        <Flex
          width="100%"
          mt="10em"
          flexDirection="column"
          justifyContent="flex-start"
        >
          <Text textAlign="center" fontSize="6xl">
            Pemilu Raya KM ITB 2022/2023
          </Text>
          <Text textAlign="center" fontSize="2xl">
            #MimbarTransformasi
          </Text>
        </Flex>
      </Sliding>
    </Layout>
  );
};
