import { defaultTiers } from "@/constants/default-tiers"

const defaultState = {
  tiers: defaultTiers,
  transactions: [],
  loading: false,
  error: {}
}

export function rewardsReducer(state, action) {
  switch (action.type) {
    case 'startLoadingTransactions':
      return {
        ...state,
        loading: true
      }
    case 'errorLoadingTransactions':
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case 'loadTransactions':
      return {
        ...state,
        loading: false,
        transactions: action.transactions,
      }
    case 'addTier':
      return {
        ...state,
        tiers: [...state.tiers, action.tier].toSorted((a, b) => a.start - b.start),
      }
    case 'removeTier':
      return {
        ...state,
        tiers: state.tiers.filter(t => t.id !== action.id),
      }
    case 'resetTiers':
      return {
        ...state,
        tiers: defaultTiers,
      }
    default: 
      return defaultState;
  }
}

export const startLoadingTransactions = () => ({type: 'startLoadingTransactions'})
export const errorLoadingTransactions = (error) => ({type: 'errorLoadingTransactions', error})
export const loadTransactions = (transactions) => ({type: 'loadTransactions', transactions})
export const addTier = (tier) => ({type: 'addTier', tier})
export const removeTier = (id) => ({type: 'removeTier', id})
export const resetTiers = () => ({type: 'resetTiers'})
