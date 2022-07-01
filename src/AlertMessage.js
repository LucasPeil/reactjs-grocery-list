
import style from "./alertMessage.module.css"
import {useEffect} from "react"

const AlertMessage = ({type,content, removeAlert,list}) => {
  // NÃO ESTA PASSANDO AS COISAS PELO PROPS
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      removeAlert();
    }, 3000);
    return () =>clearTimeout(timeout)
  }, [list,removeAlert]);
  return <p className={`alert alert-${type}`}>{content}</p>
};

export default AlertMessage;