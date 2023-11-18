import { useEffect } from "react";
import { RootState, Store } from "../store/store";
import { fetchSectionNews } from "../store/reducers/getSectionNews";
import { useSelector } from "react-redux";

const useSectionData = (section: string, limit: number = 10, offset: number = 0) => {
    useEffect(() => {
        Store.dispatch(fetchSectionNews({ section: section, limit: limit, offset: offset }));
    }, []);

    const sectionData = useSelector((state: RootState) => state.section.data);

    return sectionData;
}

export default useSectionData;