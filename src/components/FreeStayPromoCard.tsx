import PromoCardItem from "@/components/PromoCardItem";

type FreeStayPromoCardProps = {
  onPress?: () => void;
};

const FreeStayPromoCard = ({ onPress }: FreeStayPromoCardProps) => {
  return (
    <PromoCardItem
      icon="bed"
      iconBgColor="#1E3A8A"
      title="Free Stay"
      description="Find partner hotels offering free stay on your route."
      ctaLabel="Explore Stay"
      ctaColor="#1E40AF"
      cardBgColor="#EDF0FC"
      illustration={require("@/assets/images/free-stay-illustration.png")}
      illustrationPosition="right"
      onPress={onPress}
    />
  );
};

export default FreeStayPromoCard;