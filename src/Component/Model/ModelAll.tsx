import { useDispatch } from "react-redux";
import "./Model.scss";
import { changeModel } from "../../Action/Model";

export default function ModelAll(prop) {
  const { modelList } = prop;
  const dispatch = useDispatch();
  return (
    <>
      {modelList.length > 0 ? (
        <ul>
          {modelList.map((item, index) => (
            <li onClick={() => dispatch(changeModel(item))} key={index}>
              {item.name}
            </li>
          ))}
        </ul>
      ) : (
        "Danh sách rỗng"
      )}
    </>
  );
}
