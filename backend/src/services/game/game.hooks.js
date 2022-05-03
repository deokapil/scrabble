const { authenticate } = require("@feathersjs/authentication").hooks;
const { BOARD_EXTRAS } = require("../../constants");

function addOwner(context) {
  if (context.params.user) {
    context.data.owner_id = context.params.user._id;
  }
  return context;
}
function addBoard(context) {
  context.result.board = BOARD_EXTRAS;
}
async function addBoardState(context) {
  const initialState = [...Array(15).keys()].reduce((prev, curr) => {
    [...Array(15).keys()].forEach((val) => {
      prev.set(`${curr}X${val}`, null);
    });
    return prev;
  }, new Map());
  const board = await context.app.service("board").create({
    state: initialState,
    game_id: context.result._id,
  });
  context.app.service("game").patch(context.result._id, {
    board_id: board._id,
  });
  context.result.board_id = board._id;
}

module.exports = {
  before: {
    all: [authenticate("jwt")],
    find: [],
    get: [],
    create: [addOwner],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [addBoard],
    find: [],
    get: [],
    create: [addBoardState],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
