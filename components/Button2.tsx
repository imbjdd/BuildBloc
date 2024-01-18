export default function Button ({ text, onClick, formAction }: {text:string; onClick: any, formAction: any}) {
  return (
    <button
      formAction={formAction}
      className="px-4 md:px-6 py-2 rounded-md text-md border-2 text-emerald-800 border-emerald-800 dark:text-emerald-100 dark:border-emerald-100"
    >
      {text}
    </button>
  );
}