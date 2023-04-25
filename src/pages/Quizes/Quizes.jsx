import React from "react";
import Table, { SelectColumnFilter ,Statusbutton} from "./Tables";
import "./styles.css";

const getData = () => [
    {
        id:"1",
        name:"مقياس الاكتئاب والقلق والضغط العصبي",
        test:"أقل من دقيقتين",
        start:"ابدا",
        topic:"الاكتئاب",
    },
    {
        id:"2",
        name:"مقياس  القلق ",
        test:"أقل من دقيقتين",
        start:"ابدا",
        topic:"القلق"
    },
    {
        id:3,
        name:"مقياس الاكتئاب ",
        test:"أقل من دقيقتين",
        topic:"الضغط",
        start:"ابدا"

    },
    // {
    //     id:4,
    //     name:"مقياس القلق والضغط العصبي",
    //     test:"أقل من دقيقتين",
    //     topic:"الاكتئاب",
    //     start:"ابدا"
    // },
    // {
    //     id:5,
    //     name:"مقياس الاكتئاب والقلق والضغط العصبي",
    //     test:"أقل من دقيقتين",
    //     topic:"الاكتئاب",start:"ابدا"
    // },
    // {
    //     id:5,
    //     name:"مقياس الاكتئاب والقلق والضغط العصبي",
    //     test:"أقل من دقيقتين",
    //     topic:"الاكتئاب",
    //     start:"ابدا",

    // },
    // {
    //     id:6,
    //     name:"مقياس الاكتئاب والقلق والضغط العصبي",
    //     test:"أقل من دقيقتين",
    //     topic:"الاكتئاب",
    //     start:"ابدا",

    // },
    // {
    //     id:7,
    //     name:"مقياس الاكتئاب والقلق والضغط العصبي",
    //     test:"أقل من دقيقتين",
    //     topic:"الاكتئاب",
    //     start:"ابدا",

    // },
    // {
    //     id:8,
    //     name:"مقياس الاكتئاب والقلق والضغط العصبي",
    //     test:"أقل من دقيقتين",
    //     start:"ابدا",

    //     topic:"الضغط العصبي"
    // },
    // {
    //     id:9,
    //     name:"مقياس الاكتئاب والقلق والضغط العصبي",
    //     start:"ابدا",
    //     test:"أقل من دقيقتين",
    //     topic:"القلق"
    // },
]


export default function Quizes() {

  const columns = React.useMemo(
    () => [
      {
        Header: "اسم الاختبار",
        accessor: "name"
      },

      {
        Header: "مدة الاختبار",
        accessor: "test",
      },
      {
        Header: "الموضوعات",
        accessor: "topic",
        Filter: SelectColumnFilter,
        filter: "includes"
      },
      {
        Header: " ابدأ",
        accessor: Statusbutton,
      }
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);

  return (
    <>
      <div className="App py-28 bg-gray-100"  style={{ height: "100%" }}>
        <div className="min-h-screen bg-gray-100 text-gray-900">
          <main className="lg:px-[230px]  sm:px-6 ">
            <div className="">
              <Table columns={columns} data={data} />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
