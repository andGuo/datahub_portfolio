import { Heading, HStack, VStack } from "@chakra-ui/react";
import { products } from "../../utils/data/constants";
import ProductCard from "../molecules/ProductCard";

export default function ProductPortfolio() {
  return (
    <VStack spacing={16}>
      <Heading mt={10}>Products</Heading>
      <HStack wrap="wrap">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </HStack>
    </VStack>
  );
}