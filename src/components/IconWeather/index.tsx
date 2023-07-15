import { BsSun } from 'react-icons/bs'
import { BiMoon } from 'react-icons/bi'
import { BsCloudSun } from 'react-icons/bs'
import { BsCloudMoon } from 'react-icons/bs'
import { BsCloudRainHeavy } from 'react-icons/bs'

const IconWeather = ({ data }: any) => {
    const checkWeather = () => {
        const time = data ? data.time?.split(":")[0] : null;
        const clima: any = data ? data.condition_slug : null;

        if (time == null) {
            return "-"
        }

        if (time >= "06" && time < "17") {
            if (clima == "clear_day") {
                return <BsSun />
            } else if (clima == "cloudly_day" || clima == "cloud") {
                return <BsCloudSun />
            } else if (clima == "rain") {
                return <BsCloudRainHeavy />
            } else {
                return <BsSun />
            }

        } else {
            if (clima == "clear_night") {
                return <BiMoon />
            } else if (clima == "cloudly_night" || clima == "cloud") {
                return <BsCloudMoon />
            } else if (clima == "rain") {
                return <BsCloudRainHeavy />
            } else {
                return <BiMoon />
            }

        }
    }
    return (
        <div>
            {checkWeather()}
        </div>
    )
}

export default IconWeather;