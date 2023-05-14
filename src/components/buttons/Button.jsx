export default function Button({ text, buttonHandler }) {
  return (
    <button
      type="button"
      onClick={buttonHandler}
      className="py-[8px] px-[24px] flex items-center justify-center bg-slate-700"
    >
      <span className=" text-white font-bold text-[14px]">{text}</span>
    </button>
  );
}
