import style from "../../moduleCSS/body.module.css";
import { useEffect, useState } from "react";

function Home({ setPage }) {
  function TableRow({ no, title, date }) {
    return (
      <tbody>
        <tr className={style.tr}>
          <td className={style.td}>{no}</td>
          <td className={style.td}>{title}</td>
          <td className={style.td}>{date}</td>
        </tr>
      </tbody>
    );
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    async function A() {
      const a = await fetch("https://rings-of-jupiter.herokuapp.com/topicdata");
      const b = await a.json();
      await setData((current) => b);
    }
    A();
  }, []);

//불러온 데이터를 State에 넣는다.
//State에 들어간 배열을 map을 이용해서 적절한 값으로 return한다.
//map 메소드 사용에서 아주 아주 아주 취약했기 때문에 이런 경우가 생긴듯 하다.

  const TopicList = ({ data }) => {
    return (
      <>
        {data.map((data) => {
          return <TableRow
          key={data.id} 
          no={data.id} 
          title={data.title} 
          date={data.date} />;
        })}
      </>
    );
  };

  function writeTopic() {
    setPage((currnet) => "Write");
  }

  return (
    <div>
      <div id={style.container}>
        <table className={style.table}>
          <thead>
            <tr className={style.tr}>
              <th id={style.tableNo}>No</th>
              <th id={style.tableTitle}>Title</th>
              <th id={style.tableDate}>Date</th>
            </tr>
          </thead>
          <TopicList data={data} />
        </table>
      </div>
      <div>
        1 | 2 | 3 | 4<button onClick={writeTopic}>글쓰기</button>
        <button>목록</button>
      </div>
    </div>
  );
}

export default Home;
