import { GoChevronLeft } from 'react-icons/go';
import { Button } from './button';
import { useRouter } from 'next/navigation';

const BackButton = ({}) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Button
      onClick={handleBack}
      variant="tertiary"
      className="hidden gap-1 px-2 pr-4 lg:flex"
    >
      <GoChevronLeft className="text-xl" /> Back
    </Button>
  );
};

export default BackButton;
