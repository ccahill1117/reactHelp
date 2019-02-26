export default (state = {}, action) => {
  const { type, ticketId } = action;
  switch(type) {
  case 'SELECT_TICKET':
    let newState = ticketId;
    return newState;
  default:
    return state;
  }
};


//passing logic could also be written like this in curriculum :
// export default (state = {}, action) => {
//   switch (action.type) {
//   case 'SELECT_TICKET':
//     return action.ticketId;
//   default:
//     return state;
//   }
// };
