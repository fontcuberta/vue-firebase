const quantity = 0;

const mutations = {
    increase: (state, quantity) => state.quantity++,
    reduce: (state, quantity) => state.quantity--
};

export default {
    state: quantity,
    mutations
};

