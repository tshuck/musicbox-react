import { ActionCreators, types } from './types'

const enqueueSongs: ActionCreators['EnqueueSongs'] = (songs) => ({
  type: types.ENQUEUE_SONGS,
  songs,
})

const updateOrder: ActionCreators['UpdateOrder'] = (dragIndex, hoverIndex) => ({
  type: types.UPDATE_ORDER,
  dragIndex,
  hoverIndex,
})

const updateUserSongs: ActionCreators['UpdateUserSongs'] = (queue) => ({
  type: types.UPDATE_USER_SONGS,
  queue,
})

export default {
  enqueueSongs,
  updateOrder,
  updateUserSongs,
}
