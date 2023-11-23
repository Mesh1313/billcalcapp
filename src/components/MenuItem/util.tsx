import DeleteActionView from './DeleteActionView';

export const renderRightActions = (onDelete: () => void) => () => {
  return (
    <DeleteActionView onDelete={onDelete} />
  );
};
