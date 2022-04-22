import ReportCard from "../../components/ReportCard";
import "./styles.scss";

const ReportsPage = () => {
  return (
    <main className="reports-page">
      {/* Banner */}

      {/* Cards */}
      <section className="reports-page__cards">
        <ReportCard />
        <ReportCard />
        <ReportCard />
      </section>
    </main>
  );
};

export default ReportsPage;
