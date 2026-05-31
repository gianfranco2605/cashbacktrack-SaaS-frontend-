export default function SuccessMessage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-center my4 bg-amber-600 text-white font-bold p-3 uppercase text-sm">
      {children}
    </div>
  );
}
