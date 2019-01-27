export const setArchitect = architectKey => async (dispatch, getState) => {
  const architect = getState().architects.architects.find(a => a.key === architectKey);
  console.log(architect, architectKey);
  dispatch({ type: 'SET_ARCHITECT', payload: architect });
};
