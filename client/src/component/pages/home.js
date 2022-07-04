import style from "../../moduleCSS/body.module.css";



function Home( {setPage} ) {

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

  // topics => 글 데이터 topicsList = 데이터를 반복문으로.
  // topics를 이제 불러온 데이터로 바꿔야 하는데. 왜 안되냐?
  let topics = [
    { id: "1", title: "title1", date: "date1" },
    { id: "2", title: "title2", date: "date2" },
  ];

  let topicsList = topics.map((index) => {
    return (
      <TableRow
        key={index.id}
        no={index.id}
        title={index.title}
        date={index.date}
      />
    );
  });

  function writeTopic() {
    setPage(currnet => "Write")
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
          {topicsList}
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
