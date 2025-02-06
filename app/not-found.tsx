import { ErrorNotification } from '@/components/ui/error-notification';

export const metadata = {
  title: 'Strona nie znaleziona',
  description: 'Nie znaleziono strony, której szukasz.'
};

export default function Custom404() {
  return (
    <ErrorNotification
      title="404 - Strona nie znaleziona"
      content="Przepraszamy, nie możemy znaleźć strony, której szukasz."
    />
  );
}
