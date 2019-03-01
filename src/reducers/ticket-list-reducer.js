import c from './../constants';

export default (state = {}, action) => {

  let newState;
  const { names, location, issue, timeOpen, ticketId, id, formattedWaitTime } = action;

  switch (action.type) {
    case c.ADD_TICKET:
      newState = Object.assign({}, state, {
        [id]: {
          names: names,
          location: location,
          issue: issue,
          timeOpen: timeOpen,
          id: id,
          formattedWaitTime: formattedWaitTime,
        }
      });
      return newState;


    case c.DELETE_TICKET:
      newState = Object.assign({}, state);
      delete newState[ticketId];
      console.log(newState);

      return newState;
    case c.UPDATE_TIME:
      const newTicket = Object.assign({}, state[id], {formattedWaitTime});
      newState = Object.assign({}, state, {
        [id]: newTicket
      });
      return newState;

    default:
      return state;
  }
};
