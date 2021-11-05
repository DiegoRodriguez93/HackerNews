import { Spinner } from 'react-bootstrap';

export const Loader = () => {
  return (
    <div className="m-4 d-block text-center">
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="warning" />
    </div>
  );
};
