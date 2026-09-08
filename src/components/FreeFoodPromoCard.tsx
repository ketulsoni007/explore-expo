import PromoCardItem from "@/components/PromoCardItem";

type FreeFoodPromoCardProps = {
  onPress?: () => void;
};

const FreeFoodPromoCard = ({ onPress }: FreeFoodPromoCardProps) => {
  return (
    <PromoCardItem
      icon="restaurant"
      iconBgColor="#EA580C"
      title="Free Food"
      description="Find partner restaurants offering free food on your route."
      ctaLabel="Explore Food"
      ctaColor="#EA580C"
      cardBgColor="#FEF1E7"
      illustration={require("@/assets/images/free-food-illustration.png")}
      illustrationPosition="right"
      onPress={onPress}
    />
  );
};

export default FreeFoodPromoCard;