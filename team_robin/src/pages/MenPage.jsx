import { BannerMen } from "../components/BannerMen";
import BrandsSectionMen from "../components/BrandsSectionMen";
import CategoriesMen from "../components/CategoriesMen";
import CtaSectionMen from "../components/CtaSectionMen";
import DiscountSection from "../components/DiscountSectionMen";

export default function MenPage(){
    return (
        <>
            <BannerMen />
            <CategoriesMen />
            <DiscountSection />
            <CtaSectionMen />
            <BrandsSectionMen />
        </>
    )
}