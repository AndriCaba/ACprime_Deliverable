import Image from 'next/image';

const BackgroundWave = ({
  rotation = '0deg',
  translateX = '0px',
  translateY = '0px',
}) => {
  return (
    <div className="absolute inset-0 hidden w-full overflow-hidden lg:block">
      <Image
        src="/images/icons/wave_bg.png"
        alt="Wave Background"
        layout="fill"
        objectFit="cover"
        style={{
          transform: `rotate(${rotation}) translate(${translateX}, ${translateY})`,
        }}
      />
    </div>
  );
};

export default BackgroundWave;
