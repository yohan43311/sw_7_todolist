import format from "date-fns/format";
import { useState } from "react";
import { FiCheck, FiChevronLeft, FiChevronRight, FiPlus } from "react-icons/fi";
import todoItemsDummy from "./assets/dummy/todoItems";
import { Spacing } from "./components/shared/Spacing";
import { InputMode, TodoItem } from "./types";

function App() {
  // ctrl + . , mac: cmd + .
  const [currentDate, setCurrentDate] = useState(new Date());
  const [todoItems, setTodoItems] = useState<TodoItem[]>(
    todoItemsDummy as TodoItem[]
  );

  const [inputMode, setInputMode] = useState<InputMode>();

  // yyyy.MM.dd mm:ss

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 0",
        }}
      >
        <div style={{ padding: 10 }}>
          <FiChevronLeft size={25} />
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 24, fontWeight: "bold" }}>
            {format(currentDate, "MM월 dd일")}
          </div>
          <div style={{ color: "#BCBCBC" }}>
            {format(currentDate, "yyyy년")}
          </div>
        </div>
        <div style={{ padding: 10 }}>
          <FiChevronRight size={25} />
        </div>
      </div>
      <div
        style={{
          padding: 20,
          height: "100%",
          boxSizing: "border-box",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div>
          <input
            style={{
              background: "none",
              border: "none",
              borderBottom: "1px solid #666666",
              outline: "none",
              color: "#fff",
              padding: "6px 0",
              fontSize: "1em",
              width: "100%",
            }}
            type="text"
            placeholder="새로운 할일을 입력할 수 있어요 :)"
            // value={1}
            onChange={console.log}
          />
          <Spacing size={5} />
          <div>
            <button
              style={{
                background: "none",
                border: "1px solid #CFFF48",
                borderRadius: 14,
                color: "#CFFF48",
                padding: "5px 10px",
                marginRight: 4,
                fontWeight: 700,
              }}
            >
              취소
            </button>
            <button
              style={{
                background: "#CFFF48",
                padding: "5px 10px",
                border: "1px solid transparent",
                borderRadius: 14,
                fontWeight: 700,
              }}
            >
              저장
            </button>
          </div>
        </div>
        {todoItems.map((item) => {
          return (
            <div key={item.id}>
              {!item.isDone && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div>{item.content}</div>
                  <div>
                    <FiCheck color="#666666" size={26} />
                  </div>
                </div>
              )}
              {item.isDone && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      textDecoration: "line-through",
                      color: "#666666",
                    }}
                  >
                    {item.content}
                  </div>
                  <div>
                    <FiCheck color="#CFFF48" size={26} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div
        style={{
          position: "absolute",
          right: 20,
          bottom: 20,
          width: 32,
          height: 32,
          borderRadius: 30,
          background: "#CFFF48",
          // text-align vs flex center
          // text-align: 인라인 요소, text를 정렬하는 속성
          // <div style={{ textAlign: 'center' }}> <div>텍스트</div> </div>
          // <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <div>텍스트</div> </div>
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FiPlus color="#1E1E1E" size={24} />
      </div>
    </div>
  );
}

export default App;
