import HomePage from './components/HomePage';
import { homeContent } from './content';

export default function Page() {
  return <HomePage content={homeContent.en} />;
}
