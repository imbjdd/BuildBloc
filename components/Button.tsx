export default function Button ({ text, onClick }: {text:string; onClick: any}) {
  return (
    <button
    className="px-4 md:px-6 py-2 rounded-md bg-emerald-800 text-white text-md border-2 border-emerald-800"
    >
      {text}
    </button>
  );
}