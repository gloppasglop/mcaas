export const CONTAINER_SELECTED = 'CONTAINER_SELECTED';

export function selectContainer(container) {
  return {
    type: CONTAINER_SELECTED,
    container
  }
}