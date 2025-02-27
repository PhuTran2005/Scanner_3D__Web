import { useDispatch, useSelector } from "react-redux";
import "./Model.scss";
import { changeModel } from "../../Action/Model";
import { RootState } from "../../store/store";
export default function ModelAll(prop) {
  const { modelList } = prop;
  const model = useSelector((state: RootState) => state.ModelReducer);

  const dispatch = useDispatch();
  return (
    <>
      {modelList.length > 0 ? (
        <ul>
          {modelList.map((item, index) => (
            <li
              className={model.name === item.name ? "active" : ""}
              onClick={() => dispatch(changeModel(item))}
              key={index}
            >
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
