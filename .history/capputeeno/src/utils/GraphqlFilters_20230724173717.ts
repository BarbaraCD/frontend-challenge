import { FilterType } from "@/types/FilterTypes";
import { PriorityType } from "@/types/PriorityTypes";

export function getCategoryByType(type: FilterType){
  if(type == FilterType.MUG) return "mugs"
  if(type == FilterType.SHIRT) return "t-shirts"
  return ""
}

export function getFieldByPriority(priority: PriorityType){
  if(priority === PriorityType.NEWS) {field: "created_at", order: "ASC"}
  if(priority === PriorityType.BIGGEST_PRICE) "price_in_cents"
  if(priority === PriorityType.NEWS) "price_in_cents"
}