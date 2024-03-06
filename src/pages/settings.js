import BaseLayout from "@/components/BaseLayout";
import ThemeToggle from "@/components/ThemeToggle"; 

const Settings = () => {
  return (
    <BaseLayout pageTitle="APPLICATION SETTINGS">
      <div className="settings-container">
        <ThemeToggle />
      </div>
    </BaseLayout>
  );
};

export default Settings;
