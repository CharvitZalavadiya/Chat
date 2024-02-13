export default function Avatar({ username, userId, online }) {
  const colors = [
    "bg-violet-300",
    "bg-cyan-300",
    "bg-blue-300",
    "bg-green-300",
    "bg-yellow-300",
    "bg-orange-300",
    "bg-red-300",
  ];

  const userIdBase10 = parseInt(userId, 16);
  const colorIndex = userIdBase10 % colors.length;
  const color = colors[colorIndex];

  return (
    <div className={"md:w-8 md:h-8 w-6 h-6 relative rounded-full flex items-center " + color}>
      <div className="text-center w-full opacity-70">{username[0]}</div>
      {online && (
        <div className="absolute md:w-3 md:h-3 w-2 h-2 bg-green-400 bottom-0 right-0 rounded-full border border-white"></div>
      )}
      {!online && (
        <div className="absolute md:w-3 md:h-3 w-2 h-2 bg-gray-400 bottom-0 right-0 rounded-full border border-white"></div>
      )}
    </div>
  );
}
