export default function WorkButton() {
  return (
    <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#dd32da] to-[#7618e3] px-8 py-4 transition-all text-base">
      <span className="absolute bottom-0 left-0 h-48 w-full origin-bottom translate-y-full transform overflow-hidden rounded-full bg-white/15 transition-all duration-300 ease-out group-hover:translate-y-14"></span>
      <span>Let&apos;s Talk</span>
    </button>
  );
}
