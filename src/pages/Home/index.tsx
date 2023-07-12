import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchClima } from "../../store/reducers/climaSlice";
import { useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch<any>();
  const data = useSelector((state: any)=> state.clima.data);

  useEffect(()=>{
    dispatch(fetchClima());
    console.log(data)
  }, [])

  return (
    <div>
      <h1>Home</h1>
      <p>{data? data.city: "Carregando..."}</p>
    </div>
  )
}

export default Home;