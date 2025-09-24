
export default function FloorButtons( {floor, onClickbtn }) {
  return (
    <button
      onClick={() => onClickbtn(floor)}
      className="p-5 bg-green-600 text-white rounded-lg font-bold hover:bg-red-600"
    >
      {floor}
    </button>
  );
}
