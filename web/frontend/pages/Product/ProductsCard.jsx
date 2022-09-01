import { MediaCard } from "@shopify/polaris";
import "./Products.css";

const ProductsCard = ({ card }) => {
  console.log(card);
  return (
    <MediaCard
      title={card.title}
      primaryAction={{
        content: "Add to Card",
        onAction: () => {},
      }}
      secondaryAction={{
        content: "Learn more",
        onAction: () => {},
      }}
      description={card.description}
    >
      <img
        alt={card.category}
        width="150"
        height="200"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
          margin: "0 auto",
          paddingTop: 10,
        }}
        src={card.image}
      />
    </MediaCard>
  );
};

export default ProductsCard;
