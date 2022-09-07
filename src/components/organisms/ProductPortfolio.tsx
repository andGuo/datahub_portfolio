import { Heading, HStack, VStack } from "@chakra-ui/react";
import { productList } from "../../utils/constants";
import ProductCard from "../molecules/ProductCard";

export default function ProductPortfolio() {
  return (
    <VStack spacing={16}>
      <Heading mt={10}>Products</Heading>
      <HStack wrap="wrap">
        {productList.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </HStack>
    </VStack>
  );
}