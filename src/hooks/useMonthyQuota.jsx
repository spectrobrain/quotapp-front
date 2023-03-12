import { useState, useContext, useEffect } from "react"

import QuotaContext from "./../contexts/quotaProvider/QuotaContext"

export const useMonthlyQuota = () => {
  const { quotasYear } = useContext(QuotaContext)

  const [averange, setAverange] = useState(60)
  const [yearMonths, setYearMonths] = useState()

  useEffect(() => {
    const monthslice = quotasYear.slice(6)

    const monthlyArray = Array.from(monthslice, (item) => ({
      month: item?.month,
      prom:
        item.salesTotal > item?.quotaMonth
          ? 100
          : ((item?.salesTotal / item?.quotaMonth) * 100).toFixed(2),
      salesTotal: item?.salesTotal,
      quotaMonth: item?.quotaMonth,
    }))
    setYearMonths(monthlyArray)
    //console.log('yearMonths',yearMonths)
    //const yearMonthMap = yearMonths?.map((item) => item?.salesTotal)
    //console.log('yearMonthMap',yearMonthMap)
    //const yearReduce = parseFloat(yearMonthMap?.reduce((accum,currentValue)=> accum + currentValue,0))/6
    //console.log('typeof yearReduce',typeof yearReduce)
    //let promYear=parseFloat(((yearReduce / quotaMonth) * 100).toFixed(2));
    //console.log('typrof promyear',typeof promYear)
    //setAverange( promYear)
  }, [])
  //console.log('typeof salesTotal',typeof yearbymonths?.salesTotal)
  
  return {
    yearMonths,
    averange,
  }
}
