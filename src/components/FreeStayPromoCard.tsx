import PromoCardItem from "@/components/PromoCardItem";
import { useLanguage } from "@/context/LanguageContext";

type FreeStayPromoCardProps = {
  onPress?: () => void;
};

const FreeStayPromoCard = ({ onPress }: FreeStayPromoCardProps) => {
  const { t } = useLanguage();

  return (
    <PromoCardItem
      icon="bed"
      iconBgColor="#1E3A8A"
      title={t("Free Stay")}
      description={t("Find partner hotels offering free stay on your route.")}
      ctaLabel={t("Explore Stay")}
      ctaColor="#1E40AF"
      cardBgColor="#EDF0FC"
      illustration={require("@/assets/images/free-stay-illustration.png")}
      illustrationPosition="right"
      onPress={onPress}
    />
  );
};

export default FreeStayPromoCard;