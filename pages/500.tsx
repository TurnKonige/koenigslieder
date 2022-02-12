import { Error } from '../components/Error';

export default function custom500() {
  return <Error message='Ups, irgendwas ist schief gelaufen' />;
}
