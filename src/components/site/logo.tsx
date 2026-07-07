const ACCENT = "#38bdf8";

/**
 * Bow of a cruise ship in side view, pointing right (toward the wordmark).
 * The hull and decks use currentColor so the mark follows the surrounding
 * text color; portholes, funnel and waves stay sky-blue like the "Travel"
 * accent in the wordmark. Small gaps between hull and decks keep the
 * silhouette readable at favicon sizes.
 */
export function ShipMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      {/* hull, cut flush on the left so it reads as the front section */}
      <path
        d="M4 28H35.5C39.8 28 43.3 30.1 45.3 33.4L45.6 34.1C43.7 37.3 40.4 39 36.6 39H4Z"
        fill="currentColor"
      />
      {/* lower deck */}
      <path d="M4 26.5V21.5Q4 20 5.5 20H27.5L31.5 26.5Z" fill="currentColor" />
      {/* upper deck */}
      <path d="M4 18.5V14Q4 12.6 5.4 12.6H19.5L22.8 18.5Z" fill="currentColor" />
      {/* funnel */}
      <path
        d="M8.5 11.1L10.2 7.2C10.4 6.7 10.9 6.4 11.5 6.4H15L12.9 11.1Z"
        fill={ACCENT}
      />
      {/* portholes */}
      {[9.5, 16, 22.5, 29].map((cx) => (
        <circle key={cx} cx={cx} cy="33.5" r="1.8" fill={ACCENT} />
      ))}
      {/* waves */}
      <path
        d="M5 44C8 41.8 11.5 41.8 14.5 44C17.5 46.2 21 46.2 24 44"
        stroke={ACCENT}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M30 44C32.5 42 35.5 42 38 44"
        stroke={ACCENT}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
