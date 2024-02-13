import Avatar from "./avatar";

export default function Contact({id, username, onClick, selected, online}) {
  return (
    <div
      key={id}
      onClick={() => onClick(id)}
      className={
        "border-b border-gray-300 flex items-center gap-1 pr-2 cursor-pointer " +
        (selected ? "bg-blue-50" : "")
      }
    >
      {selected && (
        <div className="w-1 rounded-r-md h-12 bg-blue-600"></div>
      )}
      <div className="flex md:gap-3 py-2 md:pl-4 gap-2 pl-2">
        <Avatar online={online} username={username} userId={id} />
        <span className="text-gray-800 flex items-center md:text-md text-sm">
          {username}
        </span>
      </div>
    </div>
  );
}
