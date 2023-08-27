import Sol from '../../assets/climate/sol.svg';
import ChuvaSol from '../../assets/climate/chuva-sol.svg';
import Chuva from "../../assets/climate/chuva-forte.svg";

export const IconSelect = (clima: string | null) => {
    if (clima == "clear_day" || clima == "clear_night") {
        return Sol
    } else if (clima == "cloudly_day" || clima == "cloudly_night" || clima == "cloud") {
        return ChuvaSol
    } else if (clima == "rain" || clima == "storm" || clima == "fog") {
        return Chuva
    } else {
        return Sol
    }
}