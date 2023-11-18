import useCategoryTitle from "../../hooks/useCategoryTitle";
import { TCategoryBannerProps } from "../../utils/types";
import { Container } from "./CategoryBanner.Styled";

const CategoryBanner = ({ category }: TCategoryBannerProps) => {
    
    const title: string = useCategoryTitle(category);

    return (
        <Container>
            <h1>{title}</h1>
        </Container>
    )
}

export default CategoryBanner;