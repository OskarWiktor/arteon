import { permanentRedirect } from 'next/navigation';

export default function NoPage() {
  permanentRedirect('/no/verktoy');
}
