import PromoCardItem from "@/components/PromoCardItem";
import { useLanguage } from "@/context/LanguageContext";

type FreeFoodPromoCardProps = {
  onPress?: () => void;
};

const FreeFoodPromoCard = ({ onPress }: FreeFoodPromoCardProps) => {
  const { t } = useLanguage();

  return (
    <PromoCardItem
      icon="restaurant"
      iconBgColor="#EA580C"
      title={t("Free Food")}
      description={t("Find partner restaurants offering free food on your route.")}
      ctaLabel={t("Explore Food")}
      ctaColor="#EA580C"
      cardBgColor="#FEF1E7"
      illustration={require("@/assets/images/free-food-illustration.png")}
      illustrationPosition="right"
      onPress={onPress}
    />
  );
};

export default FreeFoodPromoCard;