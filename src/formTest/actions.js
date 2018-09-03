export const prepareData = (data) => {
    console.log(data);
    return {
        type: 'PREPARING_DATA_FOR_SUBMIT',
        payload: data
    };
}

export const loadData = (data) => {
    console.log(data);
    return {
        type: 'LOAD_INITIAL_DATA',
        payload: data
    }
}