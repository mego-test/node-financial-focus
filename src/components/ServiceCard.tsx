
import { BookText, FileText, ChartLine, Calendar, Briefcase } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: "book" | "file-text" | "chart-line" | "calendar" | "briefcase";
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  const getIcon = () => {
    switch (icon) {
      case "book":
        return <BookText size={28} className="text-nonode-light-blue mb-4" />;
      case "file-text":
        return <FileText size={28} className="text-nonode-light-blue mb-4" />;
      case "chart-line":
        return <ChartLine size={28} className="text-nonode-light-blue mb-4" />;
      case "calendar":
        return <Calendar size={28} className="text-nonode-light-blue mb-4" />;
      case "briefcase":
        return <Briefcase size={28} className="text-nonode-light-blue mb-4" />;
      default:
        return <BookText size={28} className="text-nonode-light-blue mb-4" />;
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full">
      <div className="mb-2">{getIcon()}</div>
      <h3 className="text-xl font-semibold mb-3 text-nonode-blue">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
};

export default ServiceCard;
