import { CounterDivBg } from "."
import { CounterBtn } from "../button"
import { TotalValue } from "../../styles/typography"

export function CounterCart({count, counterAdd, counterSub, data}) {
    return(
        <CounterDivBg>
            {console.log(data)}
            <CounterBtn type="button" onClick={counterSub} >-</CounterBtn>            
            <TotalValue>{count}</TotalValue>
            <CounterBtn type="button" onClick={counterAdd} >+</CounterBtn>
        </CounterDivBg>
    )
}