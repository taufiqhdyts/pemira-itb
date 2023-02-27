import { Flex, Text } from "@chakra-ui/react";
import { Layout } from "../components/common/Layout";
import CardCalon from "../components/VotingPage/CardCalon"

export const HomePage = () => {
  return (
    <Layout bg="/img/langit-2.png">
      <Sliding from="bottom" slow>
        <Flex
          width="100%"
          mt="10em"
          flexDirection="column"
          justifyContent="flex-start"
        >
          
          <Text textAlign="center" fontSize="6xl">
            K3M
          </Text>

          <div className="row">
            <div className="col-6">
                <CardCalon />
            </div>
            <div className="col-6">
                <CardCalon />
            </div>
          </div>

          <Text textAlign="center" fontSize="6xl">
            MWA-WM
          </Text>
          
          <div className="row">
            <div className="col-6">
                <CardCalon />
            </div>
            <div className="col-6">
                <CardCalon />
            </div>
          </div>
          
        </Flex>
      </Sliding>
    </Layout>
  );
};