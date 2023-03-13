import { useState, useContext, useEffect } from "react"

import QuotaContext from "../contexts/quotaProvider/QuotaContext"

export const useMedalls = () => {
  const { quotasYear } = useContext(QuotaContext)
  const [yearMonths, setYearMonths] = useState()
  const [yearTotal, setYearTotal] = useState()

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
    const yearTotal = Array.from(quotasYear, (item) => ({
      month: item?.month,
      prom:
        item.salesTotal > item?.quotaMonth
          ? 100
          : ((item?.salesTotal / item?.quotaMonth) * 100).toFixed(2),
      salesTotal: item?.salesTotal,
      quotaMonth: item?.quotaMonth,
    }))
    setYearTotal(yearTotal)
  }, [])

  return {
    yearMonths,
    yearTotal,
  }
}
