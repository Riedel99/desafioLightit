export const useControls = () => {
  const handleUp = () => {
    console.log("up");
  };
  const handleDown = () => {
    console.log("down");
  };
  const handleLeft = () => {
    console.log("left");
  };
  const handleRight = () => {
    console.log("right");
  };
  const handleSet = () => {
    console.log("fijar");
  };
  const handleDelete = () => {
    console.log("borrar");
  };
  const handleZoomIn = () => {
    console.log("zoom in");
  };
  const handleZoomOut = () => {
    console.log("zoom out");
  };
  return {
    handleUp,
    handleDown,
    handleLeft,
    handleRight,
    handleSet,
    handleDelete,
    handleZoomIn,
    handleZoomOut,
  };
};
