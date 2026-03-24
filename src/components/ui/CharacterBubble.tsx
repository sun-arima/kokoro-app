type Props = {
  message: string;
};

export default function CharacterBubble({ message }: Props) {
  return (
    <div className="flex items-end gap-3 my-4">
      {/* Simple character face */}
      <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="16" fill="#7BB5A0" opacity="0.3" />
          <circle cx="13" cy="15" r="2" fill="#2D3748" />
          <circle cx="23" cy="15" r="2" fill="#2D3748" />
          <path d="M12 22 C14 26, 22 26, 24 22" stroke="#2D3748" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      </div>
      {/* Speech bubble */}
      <div className="relative bg-card border border-primary/30 rounded-2xl rounded-bl-sm px-5 py-3 shadow-sm">
        <p className="text-lg text-text">{message}</p>
      </div>
    </div>
  );
}
