import { SET_CATALOG, SET_ACTIVE_CATEGORY, SET_SEARCH_QUERY, SET_AVAILABILITY, SET_FILTERS, SET_ALL_COLORS } from "../actionTypes/actionTypes"

export const setCatalog = (products) =>{
    return {
        type:SET_CATALOG,
        payload:products
    }
}

export const setActiveCategory = (categoryName) =>{
    return {
        type:SET_ACTIVE_CATEGORY,
        payload:categoryName
    }
}

export const setSearchQuery = (searchQuery) => {
    return {
        type:SET_SEARCH_QUERY,
        payload:searchQuery
    }
}

export const setFilters = (filters) => {
    return {
        type:SET_FILTERS,
        payload:filters
    }
}

export const setAllColors = (colors) => {
    return {
        type:SET_ALL_COLORS,
        payload:colors
    }
}