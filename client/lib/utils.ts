import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function authenticated_fetch(input: RequestInfo, init?: RequestInit) {
  return fetch(input, {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
}

export const dummyProduct = {
  id: 0,
  title: "",
  name: "",
  description: "",
  price: 0,
  image: "",
  category: "",
  quantity: 0,
}