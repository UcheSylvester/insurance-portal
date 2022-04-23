import Banner from "../../components/Banner";
import ReportCard from "../../components/ReportCard";
import { REPORT_DATA } from "./data";
import "./styles.scss";

export interface ReportsPageProps {}

const ReportsPage = () => {
  return (
    <main className="reports-page">
      <Banner />

      <section className="reports-page__cards">
        {REPORT_DATA.map((data) => (
          <ReportCard {...data} key={data.id} />
        ))}
      </section>
    </main>
  );
};

export default ReportsPage;
