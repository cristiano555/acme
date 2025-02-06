type TErrorNotification = {
  title: string;
  content: string;
};

export const ErrorNotification = ({ title, content }: TErrorNotification) => {
  return (
    <section className="flex items-center justify-center h-1/2 mt-36">
      <div className="text-center">
        <h1 className="mb-2 text-2xl font-bold text-dark-500">{title}</h1>
        <p className="text-md text-dark-500">{content}</p>
      </div>
    </section>
  );
};
