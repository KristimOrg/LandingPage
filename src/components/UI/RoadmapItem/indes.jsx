import losango from "../../../Assets/Icons/losango.png";
import pending from "../../../Assets/Icons/loading.png";
import ready from "../../../Assets/Icons/check.png";

const RoadmapItem = ({ subtitle, content, done }) => {
  return (
    <div className="relative border-l-2 ml-4 mt-2 pl-2 border-black">
      <img
        src={done ? ready : pending}
        alt=""
        className="w-5 absolute right-2 top-2"
      />
      <div className={"bg-[#f0f0f0] p-2 rounded-lg"}>
        <h3 className="font-ChakraPetch font-bold text-md uppercase">
          {subtitle}
        </h3>
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
};

export default RoadmapItem;
