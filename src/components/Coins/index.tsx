import { ValueCurrency } from "./Coins.Styled";
import { HiArrowUp } from 'react-icons/hi';
import { HiArrowDown } from 'react-icons/hi';
import { TCoinsProps } from "../../utils/types";


const Coins = ({valor}: TCoinsProps) => {

    const checkArrow = () => {
        if (valor > 0) {
            return <HiArrowUp />
        } else if (valor < 0) {
            return <HiArrowDown />
        }
    }
    return (
        <ValueCurrency valor={valor}>
            <p>{`${valor}%`}</p>
            {checkArrow()}
        </ValueCurrency>
    )
}

export default Coins;