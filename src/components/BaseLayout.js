import Sidebar from "@/components/Sidebar";

const BaseLayout = ({ children, pageTitle }) => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main-content">
        <div className="page-title">{pageTitle}</div>
        {children}
      </main>
    </div>
  );
};

export default BaseLayout;
