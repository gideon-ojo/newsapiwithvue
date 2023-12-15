import { reactive, provide, inject } from "vue";
const state = reactive({ searchQuery: "" });
const getSearchQuery = (query) => {
    state.searchQuery = query
};

const provideSearchStore = () => {
    provide('searchStore', {
        state,
        setSearchQuery,
    });
}
const useSearchStore = () => {
    const store = inject('searchStore');
    if (!store) {
        throw new Error('useSearchStore must be used within a searcStoreProvider')
    }
    return store
}

export { provideSearchStore, useSearchStore}