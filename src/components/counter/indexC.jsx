import { CounterDivBg } from "."
import { CounterBtn } from "../button"
import { TotalValue } from "../../styles/typography"


export function CounterCart({count, dataId, counterAdd, counterSub, currentSale}) {
    return(
        <CounterDivBg>
           
            <CounterBtn type="button" onClick={() => counterSub(currentSale, dataId)} >-</CounterBtn>
           
                <TotalValue>{count}</TotalValue>
           
            <CounterBtn type="button" onClick={() => counterAdd(currentSale, dataId)} >+</CounterBtn>
           
        </CounterDivBg>
    )
}