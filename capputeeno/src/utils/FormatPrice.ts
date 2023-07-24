import { FilterType } from "@/types/FilterTypes";
import { PriorityType } from "@/types/PriorityTypes";
import { getFieldByPriority, getCategoryByType } from "./GraphqlFilters";

export function formatPrice(valueInCents: number){
  const formatedValue = valueInCents / 100;
  return formatedValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

export const mountQuery = (type: FilterType, priority: PriorityType) => {
  if(type === FilterType.ALL && priority === PriorityType.POPULARITY) return `query{
    allProducts(sortField: "sales", sortOrder: "DSC") {
      id
      name
      price_in_cents
      image_url
    }
  }
`
  const sortSettings = getFieldByPriority(priority)
  const categoryFilter = getCategoryByType(type)
  return `query{
    allProducts(sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}", ${categoryFilter ? `filter: {category: "${categoryFilter}"`: ''}){
      id
      name
      price_in_cents
      image_url
    }
  }
  `
}