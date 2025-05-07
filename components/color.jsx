const BackgroundWave = ({
  color = '#EEF5FE',
  rotation = '0deg',
  translateX = '0px',
  translateY = '0px',
}) => {
  return (
    <div
      className="absolute inset-0 hidden w-full overflow-hidden lg:block"
      style={{
        backgroundColor: color,
        transform: `rotate(${rotation}) translate(${translateX}, ${translateY})`,
      }}
    />
  );
};

export default BackgroundWave;
